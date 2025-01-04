import './Navbar.css';
import React from 'react';



function Navbar() {
    return (
      <div class="container-navbar">
        <div class="container-logo">
          <img src="" alt="logo"/>
        </div>
        <div class="links-navbar">
          <ul>
            <li>Quienes somos</li>
            <li>Que hacemos</li>
            <li>Eventos</li>
            <li>Transparencia</li>
            <li>FAQ</li>
            <li>Contactanos</li>
            <li><a href="">Unete</a></li>
          </ul>
        </div>
      </div>
      )
    ;
  }

export default Navbar; 