import './QueHacemos.css';
import React from 'react';


function QueHacemos() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center" id="que-hacemos">
          <h1 className="ethmex-primary-title text-center">¿Qué Hacemos?</h1>
          <br></br>
          <p className="ethmex-text text-center mx-auto p-container">
          En Ethereum México nos enfocamos en educar, inspirar y conectar a personas interesadas en la tecnología blockchain, creando espacios para compartir ideas y colaborar en la construcción de un futuro descentralizado. Nuestras actividades incluyen:
          </p>
          <br /><br />

          <div className="container-ethmex-aux mx-auto">
            <div className="row p-3 g-3 justify-content-center">
              {/* Primer valor */}
              <div className="col-12 col-md-3 text-center hacer-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/talleres-icon.png`}
                  className="img-fluid hacer-icon mb-2"
                  alt="Icono de talleres"
                />
                <div>
                  <span className="ethmex-primary-subtitle">Eventos y talleres</span>
                  <br></br>
                    <span className="ethmex-text">
                      Encuentros presenciales y virtuales para promover la adopción y comprensión de Ethereum
                    </span>
                 </div>
              </div>
              

              {/* Segundo valor */}
              <div className="col-12 col-md-3 text-center hacer-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/capacitacion-icon.png`}
                  className="img-fluid hacer-icon mb-2"
                  alt="Icono de Capacitación"
                />
                <div>
                  <span className="ethmex-primary-subtitle">Capacitación</span>
                  <br></br>
                    <span className="ethmex-text">
                    Ofrecemos formación para aprender a usar la blockchain de manera segura y efectiva
                    </span>
                 </div>
              </div>

              {/* Tercer valor */}
              <div className="col-12 col-md-3 text-center hacer-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/colaboracion-icon.png`}
                  className="img-fluid hacer-icon mb-2"
                  alt="Icono de colaboracion"
                />
                <div>
                  <span className="ethmex-primary-subtitle">Colaboraciones</span>
                  <br></br>
                    <span className="ethmex-text">
                    Trabajamos con organizaciones y proyectos para fortalecer el ecosistema Web3 en México
                    </span>
                 </div>
              </div>

              {/* Cuarto valor */}
              <div className="col-12 col-md-3 text-center hacer-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/oportunidades-icon.png`}
                  className="img-fluid hacer-icon mb-2"
                  alt="Icono de oportunidades"
                />
                <div>
                  <span className="ethmex-primary-subtitle">Oportunidades</span>
                  <br></br>
                    <span className="ethmex-text">
                    Creamos iniciativas como becas y hackathons para impulsar el talento local y fomentar la innovación
                    </span>
                 </div>
              </div>

              {/* Quinto valor */}
              <div className="col-12 col-md-3 text-center hacer-item">
                <img
                  src={`${process.env.PUBLIC_URL}/images/escuelas-icon.png`}
                  className="img-fluid hacer-icon mb-2"
                  alt="Icono de escuelas"
                />
                <div>
                  <span className="ethmex-primary-subtitle">Visitas a escuelas</span>
                  <br></br>
                    <span className="ethmex-text">
                    Educamos a las nuevas generaciones sobre Web3 y Ethereum
                    </span>
                 </div>
              </div>
            
            
            </div>

            
          </div>
      </div>
    )
    ;
  }

export default QueHacemos; 