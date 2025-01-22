import './Navbar.css';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-ethmex">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/images/Ethereum-Mexico-Logo-01.webp" alt="Bootstrap" width="120" height=""></img>
            </a>
            <button className="navbar-toggler btn-toggler-ethmex" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
              <div className="navbar-nav ms-auto gap-2 align-items-center">
                <a className="nav-link" href="#">Quiénes somos</a>
                <a className="nav-link" href="#">Qué hacemos</a>
                <a className="nav-link" href="#">Eventos</a>
                <a className="nav-link" href="#">Transparencia</a>
                <a className="nav-link" href="#">FAQ</a>
                <a className="nav-link" href="#">Contáctanos</a>
                <a className="nav-link" href="#">
                  <button type="button" class="btn btn-navbar">Únete</button>
                </a>
              </div>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;
