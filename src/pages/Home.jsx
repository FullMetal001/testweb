import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import React, { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../components/LanguageContext'

const Home = () => {
  const { language } = useContext(LanguageContext);

  const [showScroll, setShowScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const proyectosRef = useRef([]);
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, observerOptions);
    proyectosRef.current.forEach((proyecto) => {
      if (proyecto) observer.observe(proyecto);
    });
    return () => {
      proyectosRef.current.forEach((proyecto) => {
        if (proyecto) observer.unobserve(proyecto);
      });
    };
  }, []);

  const proyectoidioma = [
    {
      titulo: {
        es: 'MIS PROYECTOS',
        en: 'MY PROYECTS'
      },
      boton: {
        es: 'Más info',
        en: 'More info'
      }
    }
  ]
  const proyectos = [
    {
      id: 1,
      titulo: {
        es: 'Oscar Café',
        en: 'Oscar Coffee'
      },
      imagen: '/images/coffee.png',
      descripcion: {
        es: 'Este proyecto sencillo contiene menú desplegable, con dirección en google maps y una lista de items. Página responsiva adaptable a pantallas grandes y pequeñas.',
        en: 'This simple project contains drop down menu, with google maps address and a list of items. Responsive page adaptable to large and small screens.'
      },
      url: 'https://coffee-web-healthy.netlify.app/'
    },
    {
      id: 2,
      titulo: {
        es: 'Warframe Wiki',
        en: 'Warframe Wiki'
      },
      imagen: '/images/warframe.png',
      descripcion: {
        es: 'Dedicado al vídeo juego Warframe, contiene información sobre algunos jugadores y armas, con buenos estilos visuales, adaptable tanto en pc y celulares.',
        en: 'Dedicated to the video game Warframe, contains information about some players and weapons, with good visual styles, adaptable both on pc and cell phones.'
      },
      url: 'https://warframe-wiki.netlify.app/'
    },
    {
      id: 3,
      titulo: {
        es: 'Portafolio fotográfico',
        en: 'Photography Portfolio'
      },
      imagen: '/images/photography.png',
      descripcion: {
        es: 'Proyecto mostrando efectos visuales, temática sobre un fotógrafo mostrando su arte y trabajo.',
        en: 'Project showing visual effects, themed around a photographer showing his art and work.'
      },
      url: 'https://photographygaby.netlify.app/'
    },
    {
      id: 4,
      titulo: {
        es: 'Proyecto 4',
        en: 'Project 4'
      },
      imagen: '/images/bg1.jpg',
      descripcion: {
        es: 'Información sobre el Proyecto 4. Destaca los aspectos más interesantes y las habilidades que demostraste.',
        en: 'Information about Project 4. Highlights the most interesting aspects and the skills you demonstrated.'
      },
      url: '/proyecto/1'
    },
  ];
    
  return (
    <div className="home"> 
        <TopBar /> 
        <HeroSection />
        <InfoSection />
        <div className="proyectos-contenedor">
          <div className='proyectos-titulo'>          
            <h2>{proyectoidioma[0].titulo[language]}</h2></div>
        {proyectos.map((proyecto, index) => (
          <div 
            key={proyecto.id} 
            ref={el => proyectosRef.current[index] = el}
            className={`proyecto-item ${index % 2 !== 0 ? 'invertir' : ''}`}
          >
            <div className="proyecto-imagen">
              <img src={proyecto.imagen} alt={proyecto.titulo[language]} />
            </div>
            <div className="proyecto-info">
              <h2>{proyecto.titulo[language]}</h2>
              <p>{proyecto.descripcion[language]}</p>
              <Link to={proyecto.url} className="boton-mas-info">
                {proyectoidioma[0].boton[language]}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
      {showScroll && (
        <button onClick={scrollToTop} className="scroll-to-top">
          <span className='flecha'>↑</span> 
        </button>
      )}
    </div>
  )
}

export default Home