import './Faq.css';
import React from 'react';



function Faq() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center">
        
        <br></br>

        <div className="container-ethmex-aux mx-auto">
          <h1 className="ethmex-primary-title ">Preguntas Frecuentes</h1>

          <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              ¿Qué es Ethereum? 
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <p className="ethmex-text">Ethereum es una red descentralizada que permite crear y usar aplicaciones, organizaciones y activos digitales sin depender de una autoridad central. Puedes crear una cuenta, explorar aplicaciones o construir las tuyas propias, todo sin restricciones externas.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
              ¿Qué es Ethereum México?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <p className="ethmex-text">Es una comunidad dedicada a la tecnología blockchain de Ethereum, que busca inspirar, educar y conectar a personas en México y Latinoamérica con el ecosistema Web3, promoviendo el aprendizaje y la colaboración dentro del "jardín infinito" de Ethereum, donde las ideas y relaciones florecen para fortalecer la comunidad.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item mb-3">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
              ¿Cómo puedo ser parte de la comunidad?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <p className="ethmex-text">Únete a nuestra comunidad en Telegram para conocer nuestras iniciativas, participar en discusiones y recibir apoyo de otros miembros que comparten tus intereses.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
              ¿Qué obtengo si me uno a la comunidad?
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show">
              <div className="accordion-body">
                <p className="ethmex-text">Tendrás acceso a contenido educativo, sesiones de networking, y la oportunidad de aprender y crecer junto a una comunidad diversa. Además, podrás participar en talleres, obtener becas y acceder a nuevas oportunidades en Web3.</p>
              </div>
            </div>
          </div>
        </div>
        
          </div>
      </div>
      )
    ;
  }

export default Faq; 