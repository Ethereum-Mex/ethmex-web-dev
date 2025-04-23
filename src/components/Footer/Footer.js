import './Footer.css';
import React, { useState, useEffect } from 'react';

function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Detecta el scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {  // Cambia 100 por el valor adecuado si el hero tiene un alto mayor
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    // Agrega el evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Elimina el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer-ethmex">
      <div className="d-flex flex-row align-items-center justify-content-center justify-content-md-between flex-wrap gap-4">
        {/* Logo principal */}
        <div className="footer-logo">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/images/EthMX_NegroFull.png`}
              alt="Ethereum México"
              width="130"
              height="auto"
            />
          </a>
        </div>

        {/* Iconos sociales */}
        <div className="d-flex gap-4 gap-xl-5 footer-icons">
          <a href="https://x.com/ethereum_mexico" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/x-icon.svg`} 
              alt="X" 
              width="25" 
              height="25" 
              className="social-icon" 
            />
          </a>
          <a href="https://t.me/ethmexico" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/telegram-icon.svg`} 
              alt="Telegram" 
              width="25" 
              height="25" 
              className="social-icon" 
            />
          </a>
          <a href="https://www.linkedin.com/company/ethereum-mexico-comunidad/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/linkedin-icon.svg`} 
              alt="LinkedIn" 
              width="25" 
              height="25" 
              className="social-icon" 
            />
          </a>
          <a href="https://www.youtube.com/@ethereummexico" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/youtube-icon.svg`} 
              alt="YouTube" 
              width="25" 
              height="25" 
              className="social-icon" 
            />
          </a>
          <a href="https://www.instagram.com/ethereum_mexico/" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/images/ig-icon.svg`} 
              alt="Instagram" 
              width="25" 
              height="25" 
              className="social-icon" 
            />
          </a>
        </div>

        {/* Botón */}
        {showButton && (
          <div>
            <button
              type="button"
              className="btn btn-footer d-md-block d-none"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Volver al inicio
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}

export default Footer;
