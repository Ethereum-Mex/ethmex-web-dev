import './NuestrosValores.css';
import React from 'react';

const valores = [
    { id: 'descentralizacion', titulo: 'Descentralización', descripcion: 'Miembros en todo el país, cualquiera puede contribuir y compartir conocimiento sobre Ethereum.' },
    { id: 'inclusion', titulo: 'Inclusión', descripcion: 'Ethereum México es un espacio abierto para todas las personas.' },
    { id: 'educacion', titulo: 'Educación', descripcion: 'Formamos a la comunidad sobre la tecnología de Ethereum.' },
    { id: 'innovacion', titulo: 'Innovación', descripcion: 'Buscamos siempre nuevas formas de hacer las cosas, mejorando día a día.' },
    { id: 'transparencia', titulo: 'Transparencia', descripcion: 'La transparencia es fundamental en todo lo que hacemos. Los recursos obtenidos se destinan exclusivamente a beneficiar a la comunidad y siempre será de conocimiento público.' },
    { id: 'comunidad', titulo: 'Comunidad', descripcion: 'Nacemos de la comunidad y para la comunidad. Todas nuestras actividades se realizan en beneficio de la misma.' }
];

function NuestrosValores() {
    return (
        <div className="container-fluid container-ethmex align-items-center justify-content-center">
            <h1 className="ethmex-primary-title text-center mb-5">Nuestros Valores</h1>
            
            <div className="container-ethmex-aux mx-auto">
                <div className="row g-4">
                    {valores.map(({ id, titulo, descripcion }) => (
                        <div className="col-12 col-md-6 d-flex align-items-start gap-3" key={id}>
                            <img
                                src={`${process.env.PUBLIC_URL}/images/${id}-icon.svg`}
                                className="img-fluid valor-icon"
                                alt={`Icono de ${titulo}`}
                                loading="lazy"
                            />
                            <div>
                                <span className="ethmex-primary-subtitle">{titulo}</span>
                                <p className="ethmex-text">{descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NuestrosValores;
