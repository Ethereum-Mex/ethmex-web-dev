import './Navbar.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { id: "quienes-somos", label: "Quiénes Somos" },
  { id: "que-hacemos", label: "Qué Hacemos" },
  { id: "eventos", label: "Eventos" },
  { id: "transparencia", label: "Transparencia" },
  { id: "faq", label: "FAQ" },
  /*{ href: "#contactanos", label: "Contáctanos" }, */
];

function handleScroll(event, id) {
  event.preventDefault();
  const section = document.getElementById(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop - 80, // Ajuste para que no se esconda tras el navbar
      behavior: "smooth",
    });
  }
}

function Navbar() {

  const location = useLocation();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
  
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`; // Redirigir si no estamos en home
    }
  };
  

  return (
    <nav className="navbar navbar-expand-lg navbar-ethmex">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/Ethereum-Mexico-Logo-01.webp`}
            alt="Ethereum México Logo"
            width="120"
          />
        </Link>
        <button
          className="navbar-toggler btn-toggler-ethmex"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-2 align-items-center">
            {/* Enlaces internos que hacen scroll */}
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                className="nav-link"
                href={`#${id}`}
                onClick={(event) => handleScroll(event, id)}
              >
                {label}
              </a>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-2 align-items-center ">
            {navLinks.map(({ label, id }) => (
              <button
              key={id}
              className="nav-link btn btn-link"
              onClick={() => handleScroll(id)}
            >
              {label}
            </button>
            ))}
            {/* Enlace externo a Feedback */}
            <Link key="feedback" className="nav-link" to="/feedback">
              Feedback
            </Link>
            {/* Enlace externo a Telegram */}
            <a className="nav-link" href="https://t.me/ethmexico" target="_blank" rel="noopener noreferrer">
              <button type="button" className="btn btn-navbar">Únete a la comunidad</button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
