import './Transparencia.css';
import React from 'react';



function Transparencia() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center ">
        <h1 className="ethmex-primary-title text-center">Transparencia</h1>
        <br /><br />

        <div className="container-ethmex-aux mx-auto ">
          <div className="row g-4 ">
            {/* Primer valor */}
            <div className="col-12 col-xl-4 text-center">
              <button type="button" class="btn btn-transparencia">Reporte Q1 2024</button>
            </div>

            {/* Segundo valor */}
            <div className="col-12 col-xl-4 text-center ">
              <button type="button" class="btn btn-transparencia">Reporte Q2 2024</button>
            </div>

            {/* Tercer valor */}
            <div className="col-12 col-xl-4 text-center ">
              <button type="button" class="btn btn-transparencia">Reporte Q3 2024</button>
            </div>

          </div>             

        </div>
      </div>
      )
    ;
  }

export default Transparencia; 