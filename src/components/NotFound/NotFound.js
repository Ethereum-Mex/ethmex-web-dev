import './NotFound.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirige al home después de 3 segundos
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000); // 3000 ms = 3 segundos

    // Limpiar el temporizador si el componente se desmonta antes de 3 segundos
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center not-found" id="">
      <div className="container-ethmex-aux mx-auto h-100">
        <span className="text-center">Página no encontrada. Volvamos al inicio...</span>
      </div>
    </div>
  );
}

export default NotFound;
