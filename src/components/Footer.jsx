
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Footer = () => {
  const { language } = useContext(LanguageContext);
  const texto = {
    es: 'Contacto',
    en: 'Contact'
  }
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>{texto[language]}</h3>
        <p>Email: Jesus@gmail.com</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className='footer-linea'></div>
    </footer>
  );
};

export default Footer;