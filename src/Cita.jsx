import './Cita.css';

function Cita({ texto, index, setCitas }) {
  const eliminarCita = () => {
    if (confirm('¿Estás seguro que querés eliminar esta cita?')) {
      setCitas(prev => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="cita">
      <p>{texto}</p>
      <button onClick={eliminarCita}>Eliminar</button>
    </div>
  );
}

export default Cita;
