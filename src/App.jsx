import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [citas, setCitas] = useState([]);

  useEffect(() => {
    const citasGuardadas = localStorage.getItem('citas');
    if (citasGuardadas) {
      setCitas(JSON.parse(citasGuardadas));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas));
  }, [citas]);

  const agregarCita = (cita) => {
    if (window.confirm('¿Confirmás agregar esta cita?')) {
      setCitas([...citas, cita]);
    }
  };

  const eliminarCita = (index) => {
    if (window.confirm('¿Querés eliminar esta cita?')) {
      setCitas(citas.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="column">
          <h2>Crear mi Cita</h2>
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className="column">
          <h2>Administra tus citas</h2>
          {citas.length === 0 ? (
            <p>No hay citas aún</p>
          ) : (
            citas.map((cita, index) => (
              <Cita key={index} {...cita} onEliminar={() => eliminarCita(index)} />
            ))
          )}
        </div>
      </div>
    </>
  );
}

function Formulario({ agregarCita }) {
  const [form, setForm] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(form).some(val => val.trim() === '')) {
      alert('Todos los campos son obligatorios');
      return;
    }

    agregarCita(form);
    setForm({ mascota: '', propietario: '', fecha: '', hora: '', sintomas: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nombre Mascota</label>
      <input type="text" name="mascota" value={form.mascota} onChange={handleChange} placeholder="Nombre Mascota" />

      <label>Nombre Dueño</label>
      <input type="text" name="propietario" value={form.propietario} onChange={handleChange} placeholder="Nombre dueño de la mascota" />

      <label>Fecha</label>
      <input type="date" name="fecha" value={form.fecha} onChange={handleChange} />

      <label>Hora</label>
      <input type="time" name="hora" value={form.hora} onChange={handleChange} />

      <label>Síntomas</label>
      <textarea name="sintomas" value={form.sintomas} onChange={handleChange}></textarea>

      <button type="submit">AGREGAR CITA</button>
    </form>
  );
}

function Cita({ mascota, propietario, fecha, hora, sintomas, onEliminar }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>
      <button className="button" onClick={onEliminar}>ELIMINAR ×</button>
    </div>
  );
}

export default App;
