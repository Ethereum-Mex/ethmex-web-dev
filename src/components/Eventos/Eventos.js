import './Eventos.css';
import React from 'react';



function Eventos() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center" id="eventos">
        <h1 className="ethmex-primary-title text-center">Eventos</h1>
        <br /><br />

        <div className="container-ethmex-aux mx-auto ">
          <div className="row g-4 ">
            {/* Primer valor */}
            <div className="col-12 col-xl-4 text-center">
              <a href="https://ethmexico.org/" class="btn btn-evento" target="_blank" rel="noopener noreferrer">
                Ethereum México 2023
              </a>
            </div>

            {/* Segundo valor */}
            <div className="col-12 col-xl-4 text-center text-align-center">
              <a href="https://ethmexico.org/" class="btn btn-evento" target="_blank" rel="noopener noreferrer">
                Ethereum México 2024
              </a>
            </div>

            {/* Tercer valor */}
            <div className="col-12 col-xl-4 text-center ">
              <a href="https://lu.ma/user/usr-v1zLEl1mRH1H4md" class="btn btn-evento" target="_blank" rel="noopener noreferrer" >
                Calendario de Eventos
              </a>
                
            </div>

          </div>             

        </div>
      </div>
      )
    ;
  }

export default Eventos; 