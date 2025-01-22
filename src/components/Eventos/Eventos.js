import './Eventos.css';
import React from 'react';



function Eventos() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center ">
        <h1 className="ethmex-primary-title text-center">Eventos</h1>
        <br /><br />

        <div className="container-ethmex-aux mx-auto ">
          <div className="row g-4 ">
            {/* Primer valor */}
            <div className="col-12 col-xl-4 text-center">
              <button type="button" class="btn btn-evento">Ethereum México 2023</button>
            </div>

            {/* Segundo valor */}
            <div className="col-12 col-xl-4 text-center">
              <button type="button" class="btn btn-evento">Ethereum México 2024</button>
            </div>

            {/* Tercer valor */}
            <div className="col-12 col-xl-4 text-center ">
              <button type="button" class="btn btn-evento">Calendario de Eventos</button>
            </div>

          </div>             

        </div>
      </div>
      )
    ;
  }

export default Eventos; 