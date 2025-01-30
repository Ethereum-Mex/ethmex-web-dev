import './ConfianNosotros.css';
import React from 'react';

function ConfianNosotros() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center">
        <h1 className="ethmex-primary-title text-center mb-5">Confían en Nosotros</h1>
        <br /><br />

        <div className="mx-auto">
            <div className="row g-4 justify-content-center align-items-center">

              {/* Logos*/}
              {[
                { src: "ethereum-foundation.svg", alt: "Icono de Ethereum Foundation" },
                { src: "esp.svg", alt: "Icono de ESP" },
                { src: "ledger.svg", alt: "Icono de Ledger" },
                { src: "bitso.svg", alt: "Icono de Bitso" },
                { src: "arbitrum.svg", alt: "Icono de Arbitrum" },
                { src: "optimism.svg", alt: "Icono de Optimism" }
              ].map((logo, index) => (
                <div key={index} className="col-4 col-xl-2 text-center mb-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${logo.src}`}
                    className="img-fluid confia-icon-lg"
                    alt={logo.alt}
                  />
                </div>
              ))}

          </div>
        </div>

      </div>
    );
}

export default ConfianNosotros;
