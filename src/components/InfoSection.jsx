
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
function InfoSection() {
  const { language } = useContext(LanguageContext);
  const texts = {
    es: {
      tittle: 'Acerca de mis proyectos',      
      texto: 'Transformo ideas en experiencias digitales únicas. Como desarrollador web apasionado, me especializo en crear sitios web dinámicos y atractivos que no solo capturan la esencia de tu marca, sino que también ofrecen una experiencia de usuario excepcional.'
    },
    en: {
      tittle: 'About My Projects',      
      texto: 'I transform ideas into unique digital experiences. As a passionate web developer, I specialize in creating dynamic and engaging websites that not only capture the essence of your brand, but also deliver an exceptional user experience.'
    }
  }
  return (
    <div className="info-section">
      <div className="info-text">
        <h2>{texts[language].tittle}</h2>
        <h3>{texts[language].texto}</h3>
      </div>
      <div className="info-image-container">
        <img src="/images/hex2.png" alt="Diseño Web" className="info-image" />
      </div>
    </div>
  );
}

export default InfoSection;