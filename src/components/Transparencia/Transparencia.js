import './Transparencia.css';
import React from 'react';



function Transparencia() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center" id="transparencia">
        <h1 className="ethmex-primary-title text-center">Transparencia</h1>
        <br /><br />

        <div className="container-ethmex-aux mx-auto ">
          <div className="row g-4 ">

            {/* Primer valor */}
            <div className="col-12 col-xl-4 text-center">
              <a href="https://docs.google.com/spreadsheets/d/1dwU5ZkSHSKdegO4DWGsRz0XWcYsqBN3hX1V-vhhTkcY/edit?usp=sharing" class="btn btn-transparencia" target="_blank" rel="noopener noreferrer">
                Reporte Ethereum México 2023
              </a>
            </div>

            {/* Segundo valor */}
            <div className="col-12 col-xl-4 text-center">
              <a href="https://docs.google.com/spreadsheets/d/1XvXDg-pFXg1QulzYTvsLwUKILRdR1rK6KkBJFdPn8u8/edit?usp=sharing" class="btn btn-transparencia" target="_blank" rel="noopener noreferrer">
                Reporte Anual 2023
              </a>
            </div>

            {/* Tercer valor */}
            <div className="col-12 col-xl-4 text-center">
              <a href="https://app.charmverse.io/ethereum-mxico/ethereum-m-xico-reporte-q1-38607541387827093" class="btn btn-transparencia" target="_blank" rel="noopener noreferrer">
                Reporte Q1 2024
              </a>
            </div>

            {/* Cuarto valor */}
            <div className="col-12 col-xl-4 text-center ">
              <a href="https://app.charmverse.io/ethereum-mxico/ethereum-m-xico-reporte-q2-571087265739902" class="btn btn-transparencia" target="_blank" rel="noopener noreferrer">
                Reporte Q2 2024
              </a>
            </div>

            {/* Quinto valor */}
            <div className="col-12 col-xl-4 text-center ">
              <a href="" class="btn btn-transparencia" target="_blank" rel="noopener noreferrer">
                Reporte Ethereum México 2024
              </a>
            </div>

          </div>             

        </div>
      </div>
      )
    ;
  }

export default Transparencia; 