import Cita from './Cita';


function Listado({ citas, setCitas }) {
  return (
    <div className="listado">
      <h2>Listado</h2>
      {citas.map((texto, index) => (
        <Cita key={index} texto={texto} index={index} setCitas={setCitas} />
      ))}
    </div>
  );
}

export default Listado;
