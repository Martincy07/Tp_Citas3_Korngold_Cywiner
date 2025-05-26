import { useState } from 'react';
import './Formulario.css';

function Formulario({ setCitas }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === '') {
      alert('La cita no puede estar vacía');
      return;
    }

    if (confirm('¿Deseás agregar esta cita?')) {
      setCitas(prev => [...prev, texto]);
      setTexto('');
    }
  };

  return (
    <div className="formulario">
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribí una cita"
        />
        <button type="submit">Agregar Cita</button>
      </form>
    </div>
  );
}

export default Formulario;
