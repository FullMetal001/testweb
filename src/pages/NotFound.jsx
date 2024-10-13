import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000); // Redirige después de 3 segundos

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found">
      <h2>404 - Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>Serás redirigido a la página de inicio en 3 segundos...</p>
    </div>
  );
}

export default NotFound;