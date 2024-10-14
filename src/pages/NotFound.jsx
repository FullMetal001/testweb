import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../components/LanguageContext';


function NotFound() {
  const { language } = useContext(LanguageContext);
  const texts = {
    es: {
      tittle: '404 - Página no encontrada',      
      texto1: 'Lo sentimos, la página que buscas no existe.',
      texto2: 'Serás redirigido a la página de inicio en 3 segundos...'
    },
    en: {
      tittle: '404 - Page not found',      
      texto1: 'Sorry, the page you are looking for does not exist.',
      texto2: 'You will be redirected to the home page in 3 seconds...'
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // Redirige después de 3 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found">
      <h2>{texts[language].tittle}</h2>
      <p>{texts[language].texto1}</p>
      <p>{texts[language].texto2}</p>
    </div>
  );
}

export default NotFound;