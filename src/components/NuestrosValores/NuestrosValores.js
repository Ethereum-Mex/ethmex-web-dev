import './NuestrosValores.css';
import React from 'react';

function NuestrosValores() {
    return (
        <div className="container-fluid container-ethmex align-items-center justify-content-center ">
            <h1 className="ethmex-primary-title text-center">Nuestros Valores</h1>
            <br /><br />

            <div className="container-ethmex-aux mx-auto">
                <div className="row g-4">
                    {/* Primer valor */}
                    <div className="col-12 col-md-6 d-flex align-items-start gap-3">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/descentralizacion-icon.png`}
                            className="img-fluid valor-icon"
                            alt="Icono de Descentralización"
                        />
                        <div>
                            <span className="ethmex-primary-subtitle">Descentralización</span>
                            <br></br>
                            <span className="ethmex-text">
                                Miembros en todo el país, cualquiera puede contribuir y compartir conocimiento sobre Ethereum
                            </span>
                        </div>
                    </div>

                    {/* Segundo valor */}
                    <div className="col-12 col-md-6 d-flex align-items-start gap-3">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/inclusion-icon.png`}
                            className="img-fluid valor-icon"
                            alt="Icono de inclusion"
                        />
                        <div>
                            <span className="ethmex-primary-subtitle">Inclusión</span>
                            <br></br>
                            <span className="ethmex-text">
                              Ethereum México es un espacio abierto para todas las personas
                            </span>
                        </div>
                    </div>

                    {/* Tercer valor */}
                    <div className="col-12 col-md-6 d-flex align-items-start gap-3">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/educacion-icon.png`}
                            className="img-fluid valor-icon"
                            alt="Icono de Educación"
                        />
                        <div>
                            <span className="ethmex-primary-subtitle">Educación</span>
                            <br></br>
                            <span className="ethmex-text">
                              Formamos a la comunidad sobre la tecnología de Ethereum
                            </span>
                        </div>
                    </div>

                    {/* Cuarto valor */}
                    <div className="col-12 col-md-6 d-flex align-items-start gap-3">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/innovacion-icon.png`}
                            className="img-fluid valor-icon"
                            alt="Icono de Innovación"
                        />
                        <div>
                            <span className="ethmex-primary-subtitle">Innovación</span>
                            <br></br>
                            <span className="ethmex-text">
                              Buscamos siempre nuevas formas de hacer las cosas, mejorando día a día
                            </span>
                        </div>
                    </div>

                    {/* Quinto valor */}
                    <div className="col-12 col-md-6 d-flex align-items-start gap-3">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/transparencia-icon.png`}
                            className="img-fluid valor-icon"
                            alt="Icono de Transparencia"
                        />
                        <div>
                            <span className="ethmex-primary-subtitle">Transparencia</span>
                            <br></br>
                            <span className="ethmex-text">
                            La transparencia es fundamental en todo lo que hacemos. Los recursos obtenidos se destinan exclusivamente a beneficiar a la comunidad y siempre será de conocimiento público
                            </span>
                        </div>
                    </div>

                    {/* Sexto valor */}
                    <div className="col-12 col-md-6 d-flex align-items-start gap-3">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/comunidad-icon.png`}
                            className="img-fluid valor-icon"
                            alt="Icono de Comunidad"
                        />
                        <div>
                            <span className="ethmex-primary-subtitle">Comunidad</span>
                            <br></br>
                            <span className="ethmex-text">
                              Nacemos de la comunidad y para la comunidad. Todas nuestras actividades se realizan en beneficio de la misma
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NuestrosValores;
