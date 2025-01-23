import './Carrusel.css';
import React from 'react';

function Carrusel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel carousel-dark carousel-hero slide" data-bs-ride="carousel">
       {/*
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
       
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
        
      </div>
      */}

      <div className="carousel-inner">
        <div className="carousel-item active d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5">
          <div className=" bienvenida-texto">
            <span>Bienvenidos a </span> <br></br>
            <span style={{ color: '#1E836D' }}>Ethereum </span>
            <span style={{ color: '#D83535' }}>México </span>
          </div>
          <img src={`${process.env.PUBLIC_URL}/images/Capa_1-2.png`} className="d-block img-fluid bienvenida-imagen" alt="..."></img>
        </div>
        {/*
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/images/Capa_1-2.png`} className="d-block img-fluid" alt="..."></img>
        </div>
        <div className="carousel-item">
          <img src={`${process.env.PUBLIC_URL}/images/Capa_1-2.png`} className="d-block img-fluid" alt="..."></img>
        </div>
        */}
      </div>
       {/*
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      */}
    </div>
  );
}

export default Carrusel;  // Exporta el componente Hero
