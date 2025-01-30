import './NuestrosLogros.css';
import React from 'react';



function NuestrosLogros() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center logros">
        <h1 className="ethmex-primary-title text-center mb-2">Nuestros Logros</h1>
        <br /><br />

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center w-100 h-100">
                <div className="bienvenida-texto text-center">
                    <span>Te damos la bienvenida a </span> <br />
                    <span style={{color: '#1E836D'}}>Ethereum </span>
                    <span style={{color: '#D83535'}}>México </span>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/EM-logo-square.svg`} className="d-block img-fluid" alt="..." />
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center gap-5 w-100 h-100">
                <div className="bienvenida-texto text-center">
                  <span style={{color: '#1E836D'}}>Próximamente... </span>
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/MTY-1.avif`} className="d-block img-fluid bienvenida-imagen" alt="..." />
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center gap-5 w-100 h-100">
                <div className="bienvenida-texto text-center">
                    <span style={{color: '#1E836D'}}>Ethereum México 2025</span> <br />
                    <span style={{color: '#D83535'}}>Monterrey</span> 
                </div>
                <img src={`${process.env.PUBLIC_URL}/images/MTY-2.avif`} className="d-block img-fluid bienvenida-imagen" alt="..." />
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon visually-hidden" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      )
    ;
  }

export default NuestrosLogros; 