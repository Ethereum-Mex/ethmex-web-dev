import './QuienesSomos.css';
import React from 'react';

function QuienesSomos() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center" id="quienes-somos">
        <h1 className="ethmex-primary-title text-center">¿Quiénes Somos?</h1>
        <br /><br />

        <div className="container-ethmex-aux mx-auto">
        <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center gap-4 ">
            <img 
              src={`${process.env.PUBLIC_URL}/images/fin_merida.JPG`}
              className="d-block img-fluid somos-imagen" 
              alt="Imagen de Ethereum México" 
            />
          <div className="somos-texto">
            <p className="ethmex-text">
              Ethereum México es una comunidad vibrante de entusiastas de Web3, centrada en la blockchain de Ethereum. 
              <span className="ethmex-primary-text"> Nacimos para inspirar, educar y conectar </span> 
              a personas interesadas en esta tecnología transformadora, a través de actividades educativas y colaborativas impulsadas por la comunidad.
            </p>

            <p className="ethmex-text">
              <span className="ethmex-primary-text">Nuestro objetivo es motivar a mexicanos y latinoamericanos a unirse al movimiento Web3 </span> , 
              contribuyendo al "jardín infinito" de Ethereum, un espacio en constante expansión donde ideas, aprendizaje y relaciones fortalecen el ecosistema y nuestra comunidad.
            </p>
          </div>
        </div>

        <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Misión 
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <p className="ethmex-text">Promover el estudio, la investigación y la capacitación sobre Ethereum en México, colaborando con organizaciones afines y participando en iniciativas que fortalezcan la tecnología blockchain y su ecosistema.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                Visión
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <p className="ethmex-text">Ser una comunidad sólida y referente en el crecimiento del ecosistema Ethereum, tanto en México como internacionalmente, comprometidos con la comunidad y su desarrollo.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                Nuestra historia
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <p className="ethmex-text">Ethereum México nació en mayo de 2022 como una iniciativa para atraer, inspirar y empoderar a la próxima generación de entusiastas de Ethereum. Desde entonces, trabajamos por un futuro descentralizado, aprovechando el poder que la blockchain aporta al mundo.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

    );
}

export default QuienesSomos;
