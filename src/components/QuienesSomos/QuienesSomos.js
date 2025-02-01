import './QuienesSomos.css';
import React from 'react';

const acordeonItems = [
  { id: "One", titulo: "Misión", contenido: "Promover el estudio, la investigación y la capacitación sobre Ethereum en México, colaborando con organizaciones afines y participando en iniciativas que fortalezcan la tecnología blockchain y su ecosistema." },
  { id: "Two", titulo: "Visión", contenido: "Ser una comunidad sólida y referente en el crecimiento del ecosistema Ethereum, tanto en México como internacionalmente, comprometidos con la comunidad y su desarrollo." },
  { id: "Three", titulo: "Nuestra historia", contenido: "Ethereum México nació en mayo de 2022 como una iniciativa para atraer, inspirar y empoderar a la próxima generación de entusiastas de Ethereum. Desde entonces, trabajamos por un futuro descentralizado, aprovechando el poder que la blockchain aporta al mundo." }
];

function QuienesSomos() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center" id="quienes-somos">
      <h1 className="ethmex-primary-title text-center mb-4">¿Quiénes Somos?</h1>

      <div className="container-ethmex-aux mx-auto">
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-4">
          <img 
            src={`${process.env.PUBLIC_URL}/images/fin_merida.JPG`} 
            className="d-block img-fluid somos-imagen rounded-4" 
            alt="Imagen de Ethereum México" 
            loading="lazy" 
          />
          <div className="somos-texto">
            <p className="ethmex-text">
              Ethereum México es una comunidad vibrante de entusiastas de Web3, centrada en la blockchain de Ethereum. 
              <span className="ethmex-primary-text"> Nacimos para inspirar, educar y conectar </span> 
              a personas interesadas en esta tecnología transformadora, a través de actividades educativas y colaborativas impulsadas por la comunidad.
            </p>
            <p className="ethmex-text">
              <span className="ethmex-primary-text">Nuestro objetivo es motivar a mexicanos y latinoamericanos a unirse al movimiento Web3</span>, 
              contribuyendo al "jardín infinito" de Ethereum, un espacio en constante expansión donde ideas, aprendizaje y relaciones fortalecen el ecosistema y nuestra comunidad.
            </p>
          </div>
        </div>

        <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
          {acordeonItems.map(({ id, titulo, contenido }) => (
            <div className="accordion-item mb-3" key={id}>
              <h2 className="accordion-header">
                <button 
                  className="accordion-button" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#panelsStayOpen-collapse${id}`} 
                  aria-controls={`panelsStayOpen-collapse${id}`}
                >
                  {titulo}
                </button>
              </h2>
              <div id={`panelsStayOpen-collapse${id}`} className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p className="ethmex-text">{contenido}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuienesSomos;
