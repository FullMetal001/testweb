
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
function HeroSection() {
  const { language } = useContext(LanguageContext);
  const texts = {
    es: {
      tittle: 'PORTAFOLIO DE DISEÑO WEB',
      subtittle: 'PROGRAMADOR',
      texto: 'Aquí encontrarás una coleccion de mis proyectos de diseño web más recientes y destacados. Cada proyecto demuestra mis habilidades en programación responsivo, y las últimas tecnologías web.'
    },
    en: {
      tittle: 'WEB DESIGN PORTFOLIO',
      subtittle: "PROGRAMER",
      texto: 'Here you will find a collection of my most recent and outstanding web design projects. Each project demonstrates my skills in responsive programming, and the latest web technologies.'
    }
  }
  return (
    <div className="hero-section">
      <img src="/images/icon1.png" className="hero-image" />
      <h2 className="hero-text">{texts[language].tittle}</h2>
      <h3 className="hero-text2">{texts[language].subtittle}</h3>
      <h3 className="hero-text3">{texts[language].texto}</h3>
    </div>
  );
}

export default HeroSection;