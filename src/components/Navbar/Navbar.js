import './Navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { href: "#quienes-somos", label: "Quiénes Somos" },
  { href: "#que-hacemos", label: "Qué Hacemos" },
  { href: "#eventos", label: "Eventos" },
  { href: "#transparencia", label: "Transparencia" },
  { href: "#faq", label: "FAQ" },
  /*{ href: "#contactanos", label: "Contáctanos" }, */
  { href: "/feedback", label: "Feedback", external: true },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-ethmex">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={`${process.env.PUBLIC_URL}/images/Ethereum-Mexico-Logo-01.webp`}
            alt="Ethereum México Logo"
            width="120"
          />
        </a>
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
            {navLinks.map(({ href, label, external }) => (
              <a
              key={href}
              className="nav-link"
              href={href}
              target={external ? "_blank" : "_self"} 
              rel={external ? "noopener noreferrer" : undefined} 
              >
                {label}
              </a>
            ))}
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
