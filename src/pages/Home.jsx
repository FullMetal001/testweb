import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import ProyectoItem from '../components/ProyectoItem';

const Home = () => {
    const proyectos = [
        {
          id: 1,
          titulo: 'Proyecto 1',
          imagen: '/src/assets/Hexagono.jpg',
          descripcion: 'Descripción detallada del Proyecto 1. Aquí puedes explicar las tecnologías utilizadas, el propósito del proyecto y tus logros.'
        },
        {
          id: 2,
          titulo: 'Proyecto 2',
          imagen: '/src/assets/Hexagono.jpg',
          descripcion: 'Información sobre el Proyecto 2. Destaca los aspectos más interesantes y las habilidades que demostraste.'
        },  
        {
            id: 3,
            titulo: 'Proyecto 3',
            imagen: '/src/assets/Hexagono.jpg',
            descripcion: 'Información sobre el Proyecto 3. Destaca los aspectos más interesantes y las habilidades que demostraste.'
          },  
          {
            id: 4,
            titulo: 'Proyecto 4',
            imagen: '/src/assets/Hexagono.jpg',
            descripcion: 'Información sobre el Proyecto 4. Destaca los aspectos más interesantes y las habilidades que demostraste.'
          },     
      ];
  return (
    <div className="home">
        <header className="header">
            <h1>Diseño de paginas web</h1>
            <div className="redes-sociales">
                <a href="https://faq.whatsapp.com/5913398998672934" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>  
                <a href="https://www.instagram.com/?hl=es" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a> 
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>        
            </div>
        </header>
        <div className="proyectos-contenedor">
        {proyectos.map((proyecto, index) => (
          <ProyectoItem
            key={proyecto.id}
            imagen={proyecto.imagen}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            invertir={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  )
}

export default Home