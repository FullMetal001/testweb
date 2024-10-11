import { Link } from 'react-router-dom';

function ProyectoItem({ imagen, titulo, descripcion, invertir, id }) {
    return (
      <div className={`proyecto-item ${invertir ? 'invertir' : ''}`}>
        <div className="proyecto-imagen">
          <img src={imagen} alt={titulo} />
        </div>
        <div className="proyecto-info">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
          <Link to={`/proyecto/${id}`} className="boton-mas-info">
            Más info
          </Link>
        </div>
      </div>
    );
  }
  
  export default ProyectoItem;