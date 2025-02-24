import './ConfianNosotros.css';
import React from 'react';

function ConfianNosotros() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center">
        <h1 className="ethmex-primary-title text-center mb-4">Confían en Nosotros</h1>
       

        <div className="mx-auto">
            <div className="row justify-content-center align-items-center">

              {/* Logos*/}
              {[
                { src: "esp.svg", alt: "Icono de ESP" },
                { src: "arbitrum.svg", alt: "Icono de Arbitrum" },
                { src: "ethereum-foundation.svg", alt: "Icono de Ethereum Foundation" },
                { src: "ledger.svg", alt: "Icono de Ledger" },
                { src: "bitso.svg", alt: "Icono de Bitso" },
                { src: "optimism.svg", alt: "Icono de Optimism" },
                { src: "bitrefill.svg", alt: "Icono de Bitrefill" },
                { src: "ens_logo_text_dark.svg", alt: "Icono de ENS" },
                { src: "metalogo.svg", alt: "Icono de Metapool" },
                { src: "starknet-logo.svg", alt: "Icono de Starknet" },
                { src: "obol.svg", alt: "Icono de Obol" },
                { src: "streameth.svg", alt: "Icono de StreamEth" }
              ].map((logo, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 mb-md-5 text-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${logo.src}`}
                    className="img-fluid"
                    alt={logo.alt}
                    width="170"
                  />
                </div>
              ))}

          </div>
        </div>

      </div>
    );
}

export default ConfianNosotros;
