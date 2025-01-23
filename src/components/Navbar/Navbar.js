import './Navbar.css';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-ethmex">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={`${process.env.PUBLIC_URL}/images/Ethereum-Mexico-Logo-01.webp`} alt="Bootstrap" width="120" height=""></img>
            </a>
            <button className="navbar-toggler btn-toggler-ethmex" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto gap-2 align-items-center">
                <a className="nav-link" href="#quienes-somos">Quiénes Somos</a>
                <a className="nav-link" href="#que-hacemos">Qué Hacemos</a>
                <a className="nav-link" href="#eventos">Eventos</a>
                <a className="nav-link" href="#transparencia">Transparencia</a>
                <a className="nav-link" href="#faq">FAQ</a>
                <a className="nav-link" href="#contactanos">Contáctanos</a>
                <a className="nav-link" href="https://t.me/ethmexico" target="_blank" rel="noopener noreferrer">
                  <button type="button" class="btn btn-navbar">Únete a la comunidad</button>
                </a>
              </div>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;
