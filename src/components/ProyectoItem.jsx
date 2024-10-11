function ProyectoItem({ imagen, titulo, descripcion, invertir }) {
    return (
      <div className={`proyecto-item ${invertir ? 'invertir' : ''}`}>
        <div className="proyecto-imagen">
          <img src={imagen} alt={titulo} />
        </div>
        <div className="proyecto-info">
          <h2>{titulo}</h2>
          <p>{descripcion}</p>
        </div>
      </div>
    );
  }
  
  export default ProyectoItem;