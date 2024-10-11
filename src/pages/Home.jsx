import React from 'react'
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

const Home = () => {
    const proyectos = [
        { id: 1, nombre: 'Proyecto 1', imagen: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png', ruta: '/proyecto1' },
        { id: 2, nombre: 'Proyecto 2', imagen: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png', ruta: '/proyecto2' },
        
      ];
  return (
    <div className="home">
        <header className="header">
            <h1>Mi Portafolio</h1>
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
      
    </div>
  )
}

export default Home