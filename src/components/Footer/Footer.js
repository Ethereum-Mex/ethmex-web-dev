import './Footer.css';
import React from 'react';

function Footer() {
  return (
    <footer className="footer-ethmex ">
        <div className="d-flex flex-row align-items-center justify-content-between flex-wrap">
          {/* Logo principal */}
          <div className="footer-logo">
            <a href="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/Ethereum-Mexico_SVG-NEGRO.png`}
                alt="Ethereum México"
                width="100"
                height="auto"
              />
            </a>
          </div>

          {/* Iconos sociales */}
          <div className="d-flex gap-4 gap-xl-5 footer-icons">
            <a href="#x" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/images/x-icon.png`}
                alt="X"
                width="25"
                height="25"
                className="social-icon"
              />
            </a>
            <a href="#telegram" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/images/telegram-icon.png`}
                alt="Telegram"
                width="25"
                height="25"
                className="social-icon"
              />
            </a>
            <a href="#linkedin" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/images/linkedin-icon.png`}
                alt="LinkedIn"
                width="25"
                height="25"
                className="social-icon"
              />
            </a>
            <a href="#youtube" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/images/youtube-icon.png`}
                alt="YouTube"
                width="25"
                height="25"
                className="social-icon"
              />
            </a>
            <a href="#instagram" target="_blank" rel="noopener noreferrer">
              <img
                src={`${process.env.PUBLIC_URL}/images/ig-icon.png`}
                alt="Instagram"
                width="25"
                height="25"
                className="social-icon"
              />
            </a>
          </div>

          {/* Botón */}
          <div>
            <button
              type="button"
              className="btn btn-footer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Volver al inicio
            </button>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
