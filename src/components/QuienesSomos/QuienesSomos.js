import './QuienesSomos.css';
import React from 'react';

const acordeonItems = [
  { id: "One", titulo: "Misión", contenido: "Inspirar y educar a más personas sobre Ethereum. Y facilitar el acceso al conocimiento, la innovación y la participación en el ecosistema, impulsando iniciativas y un evento anual. " },
  { id: "Two", titulo: "Visión", contenido: "Lograr ser la organización referente en el ecosistema web3, fortaleciendo el desarrollo de Ethereum a través de iniciativas, educación, investigación, capacitación y colaboración." },
  { id: "Three", titulo: "Nuestra historia", contenido: `Ethereum México nació en 2022 como una iniciativa para atraer, inspirar y empoderar a la próxima generación de entusiastas de Ethereum. Desde entonces, trabajamos por un futuro descentralizado, aprovechando el potencial de la blockchain y creando espacios de aprendizaje e innovación. \n\n  El nombre Ethereum México se adoptó, en un contexto donde surgían diversas iniciativas enfocadas en Ethereum a nivel global, especialmente en preparación para Devcon 2022 en Colombia. Desde el inicio, nos establecimos como una iniciativa, que opera de forma independiente y sin una relación directa con la Ethereum Foundation. \n\n Si quieres conocer más sobre el ecosistema Ethereum en México y nuestra evolución como organización, puedes explorar más información <a href="https://app.charmverse.io/ethereum-mxico/ethmexico-comunicado-febrero-2025-07839893624718375" target="_blank" rel="noopener noreferrer ">aquí</a>.` }
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
            <p className="ethmex-text"> Ethereum México es una organización dedicada a 
              <span className="ethmex-primary-text"> fomentar e impulsar el crecimiento de Ethereum en México </span> 
              mediante workshops, eventos e iniciativas educativas.
            </p>
            <p className="ethmex-text">
            Estamos comprometidos con el fortalecimiento del ecosistema Ethereum en el país a través de eventos anuales, iniciativas educativas y el desarrollo de recursos accesibles para la comunidad. Nos enfocamos en <span className="ethmex-primary-text"> crear espacios de aprendizaje e innovación </span> en colaboración con organizaciones nacionales e internacionales. 
            </p>
            
            <p className="ethmex-text">En Ethereum México, nuestro objetivo es fortalecer el ecosistema sin limitar su crecimiento a una sola visión. Buscamos ser un <span className="ethmex-primary-text">puente que conecte a la comunidad  </span> con oportunidades, conocimientos y herramientas para construir el futuro de Web3.
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
              <div id={`panelsStayOpen-collapse${id}`} className="accordion-collapse collapse ">
                <div className="accordion-body">
                  
                  <span className="ethmex-text" dangerouslySetInnerHTML={{ __html: contenido.replace(/\n/g, '<br />') }} style={{ textDecoration: "none" }} />
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
