
import React, { useContext } from 'react';
import { LanguageContext } from '../components/LanguageContext';
import spanish from '/images/spanish.png'
import english from '/images/english.png'

function TopBar() { 
  const { language, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="top-bar">
      <div className="top-bar-content">        
        <h1 className="top-bar-title">CODE WEB</h1>
      </div>
      <div className="topbar-button">
            {language === 'es' ? (
                <button onClick={() => changeLanguage('en')} className="language-button">
                    <img src={english} alt="English" />
                </button>
            ) : (
                <button onClick={() => changeLanguage('es')} className="language-button">
                    <img src={spanish} alt="Español" />
                </button>
            )}
        </div>
    </div>
  );
}

export default TopBar;