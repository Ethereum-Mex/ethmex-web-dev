import './QueHacemos.css';
import React from 'react';

const actividades = [
  {
    src: "talleres-icon.svg",
    alt: "Icono de talleres",
    titulo: "Eventos y talleres",
    descripcion: "Encuentros presenciales y virtuales para promover la adopción y comprensión de Ethereum"
  },
  {
    src: "capacitacion-icon.svg",
    alt: "Icono de Capacitación",
    titulo: "Capacitación",
    descripcion: "Ofrecemos formación para aprender a usar la blockchain de manera segura y efectiva"
  },
  {
    src: "colaboracion-icon.svg",
    alt: "Icono de colaboración",
    titulo: "Colaboraciones",
    descripcion: "Trabajamos con organizaciones y proyectos para fortalecer el ecosistema Web3 en México"
  },
  {
    src: "oportunidades-icon.svg",
    alt: "Icono de oportunidades",
    titulo: "Oportunidades",
    descripcion: "Creamos iniciativas como becas y hackathons para impulsar el talento local y fomentar la innovación"
  },
  {
    src: "escuelas-icon.svg",
    alt: "Icono de escuelas",
    titulo: "Visitas a escuelas",
    descripcion: "Educamos a las nuevas generaciones sobre Web3 y Ethereum"
  }
];

function QueHacemos() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center" id="que-hacemos">
      <h1 className="ethmex-primary-title text-center mb-5">¿Qué Hacemos?</h1>
      <p className="ethmex-text text-center mx-auto p-container">
        En Ethereum México nos enfocamos en educar, inspirar y conectar a personas interesadas en la tecnología blockchain, creando espacios para compartir ideas y colaborar en la construcción de un futuro descentralizado. Nuestras actividades incluyen:
      </p>

      <div className="container-ethmex-aux mx-auto">
        <div className="row p-3 g-3 justify-content-center">
          {actividades.map((actividad, index) => (
            <div key={index} className="col-12 col-md-3 text-center hacer-item">
              <img
                src={`${process.env.PUBLIC_URL}/images/${actividad.src}`}
                className="img-fluid hacer-icon mb-2 "
                alt={actividad.alt}
              />
              <div>
                <span className="ethmex-primary-subtitle">{actividad.titulo}</span>
                <p className="ethmex-text text-center">{actividad.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QueHacemos;
