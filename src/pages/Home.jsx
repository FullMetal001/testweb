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
        es: 'Proyecto 2',
        en: 'Project 2'
      },
      imagen: '/images/bg1.jpg',
      descripcion: {
        es: 'Información sobre el Proyecto 2. Destaca los aspectos más interesantes y las habilidades que demostraste.',
        en: 'Information about Project 2. Highlights the most interesting aspects and the skills you demonstrated.'
      },
      url: '/proyecto/1'
    },
    {
      id: 3,
      titulo: {
        es: 'Proyecto 3',
        en: 'Project 3'
      },
      imagen: '/images/bg2.jpg',
      descripcion: {
        es: 'Información sobre el Proyecto 3. Destaca los aspectos más interesantes y las habilidades que demostraste.',
        en: 'Information about Project 3. Highlights the most interesting aspects and the skills you demonstrated.'
      },
      url: '/proyecto/1'
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