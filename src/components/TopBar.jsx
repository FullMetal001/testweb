
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">        
        <h1 className="top-bar-title">Code Web</h1>
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
      </div>
    </div>
  );
}

export default TopBar;