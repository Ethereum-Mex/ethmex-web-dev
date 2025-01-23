import './ConfianNosotros.css';
import React from 'react';



function ConfianNosotros() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center">
        <h1 className="ethmex-primary-title text-center">Confian en Nosotros</h1>
        <br /><br />

        <div className="mx-auto">
            <div className="row g-4 justify-content-center align-items-center">

              {/* Primer valor */}
              <div className="col-3 col-xl-1 text-center mx-4 mb-5 mb-xl-0">
                <img
                  src={`${process.env.PUBLIC_URL}/images/ethereum-foundation.png`}
                  className="img-fluid confia-icon"
                  alt="Icono de ethereum foundation"
                />
              </div>

              {/* Segundo valor */}
              <div className="col-3 col-xl-1 text-center mx-4 mb-5  mb-xl-0">
                <img
                  src={`${process.env.PUBLIC_URL}/images/esp.png`}
                  className="img-fluid confia-icon"
                  alt="Icono de esp"
                />
              </div>

              {/* Tercer valor */}
              <div className="col-3 col-xl-1 text-center mx-4 mb-5  mb-xl-0">
                <img
                  src={`${process.env.PUBLIC_URL}/images/ledger.png`}
                  className="img-fluid confia-icon"
                  alt="Icono de ledger"
                />
              </div>

              {/* Cuarto valor */}
              <div className="col-3 col-xl-1 text-center mx-4 ">
                <img
                  src={`${process.env.PUBLIC_URL}/images/bitso.png`}
                  className="img-fluid confia-icon"
                  alt="Icono de Bitso"
                />
              </div>

              {/* Quinto valor */}
              <div className="col-3 col-xl-1 text-center mx-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/arbitrum.png`}
                  className="img-fluid confia-icon"
                  alt="Icono de Arbitrum"
                />
              </div>

              {/* Sexto valor */}
              <div className="col-3 col-xl-1 text-center mx-4">
                <img
                  src={`${process.env.PUBLIC_URL}/images/optimism.png`}
                  className="img-fluid confia-icon"
                  alt="Icono de Optimism"
                />
              </div>
          </div>
        </div>

      </div>
      )
    ;
  }

export default ConfianNosotros; 