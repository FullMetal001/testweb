import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
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
    const proyectos = [
        {
          id: 1,
          titulo: 'Healthy Coffee',
          imagen: '/images/c2.jpg',
          descripcion: 'Este proyecto contiene información sobre los beneficios del café y cómo conseguirlo.'
        },
        {
          id: 2,
          titulo: 'Proyecto 2',
          imagen: '/images/bg1.jpg',
          descripcion: 'Información sobre el Proyecto 2. Destaca los aspectos más interesantes y las habilidades que demostraste.'
        },  
        {
            id: 3,
            titulo: 'Proyecto 3',
            imagen: '/images/bg2.jpg',
            descripcion: 'Información sobre el Proyecto 3. Destaca los aspectos más interesantes y las habilidades que demostraste.'
          },  
          {
            id: 4,
            titulo: 'Proyecto 4',
            imagen: '/images/bg1.jpg',
            descripcion: 'Información sobre el Proyecto 4. Destaca los aspectos más interesantes y las habilidades que demostraste.'
          },     
      ];
  return (
    <div className="home"> 
        <TopBar /> 
        <HeroSection />
        <InfoSection />
        <div className="proyectos-contenedor">
          <div className='proyectos-titulo'><h2>MY PROJECTS</h2></div>
        {proyectos.map((proyecto, index) => (
          <div 
            key={proyecto.id} 
            ref={el => proyectosRef.current[index] = el}
            className={`proyecto-item ${index % 2 !== 0 ? 'invertir' : ''}`}
          >
            <div className="proyecto-imagen">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
            </div>
            <div className="proyecto-info">
              <h2>{proyecto.titulo}</h2>
              <p>{proyecto.descripcion}</p>
              <Link to={`/proyecto/${proyecto.id}`} className="boton-mas-info">
                Más info
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