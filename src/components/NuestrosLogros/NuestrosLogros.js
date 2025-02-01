import './NuestrosLogros.css';
import React from 'react';

const logros = [
  {
    img: 'IMG_8431-1.jpeg',
    alt: 'Ethereum México 2024 en Mérida',
    titulo: 'Ethereum México 2024 en Mérida',
    descripcion: 'Llevado a cabo en el Centro Internacional de Congresos de Yucatán, el evento contó con 2 escenarios, 40 ponencias, 5 paneles y 7 talleres, reuniendo a más de 700 asistentes y alcanzando 3.1k vistas en streaming. \n\nUna de las participaciones más destacadas fue la de Vitalik Buterin.  ',
    link: 'https://x.com/ethereum_mexico/status/1842230261200605297'
  },
  {
    img: 'camino-jaguar.jpeg',
    alt: 'Camino del Jaguar',
    titulo: 'Camino del Jaguar',
    descripcion: 'Con más de 300 asistentes en 15 eventos realizados en 13 ciudades diferentes, impulsamos la conversación sobre temas de blockchain a lo largo y ancho del país. \n\nLos participantes tuvieron la oportunidad de ser seleccionados para recibir una beca en colaboración con Talent Protocol, como scholars para el evento de Ethereum México 2024 en Mérida.',
    link: 'https://x.com/ethereum_mexico/status/1820575070114484287'
  },
  {
    img: 'pgf.jpeg',
    alt: 'Ronda Retroactiva de Bienes Públicos',
    titulo: 'Ronda Retroactiva de Bienes Públicos',
    descripcion: 'Primera ronda de financiación de bienes públicos retroactivos con un fondo de $10,000 USDC impactando a 20 comunidades y proyectos mexicanos. \n\nEl objetivo hace de apoyar a las comunidades que han tenido un impacto positivo en el ecosistema para que sigan construyendo y creciendo.',
    link: 'https://x.com/ethereum_mexico/status/1775948155894317185'
  },
  {
    img: 'dvt.jpeg',
    alt: 'DVT de Ethereum México',
    titulo: 'Primer DVT de Ethereum México',
    descripcion: 'Esta iniciativa de Ethereum México comenzó operando en Sonora, Sinaloa, Puebla y Yucatán, contribuyendo a la evolución de la infraestructura descentralizada en México. \n\nSe lanzó con la unidad DVT en Holesky en Chichén Itzá, marcando un hito en el proyecto.',
    link: 'https://x.com/ethereum_mexico/status/1757833889643475105'
  },
  {
    img: 'ethmex2023.jpg',
    alt: 'Ethereum México 2023 en CDMX',
    titulo: 'Ethereum México 2023 en CDMX',
    descripcion: 'Celebramos reuniendo a 32 comunidades y más de 2,000 espectadores vía streaming. \n\nContamos con la participación de 6 Media Partners, 11 Community Partners y 15 community showcases en vivo. Además, la celebración estuvo llena de energía con baile, mariachi y DJ.',
    link: 'https://x.com/ethereum_mexico/status/1725310417768009900'
  },
  {
    img: 'camino-optimista.jpeg',
    alt: 'Camino Optimista',
    titulo: 'Camino Optimista',
    descripcion: 'Un recorrido por 11 ciudades de México, difundiendo el conocimiento sobre Optimism y conectando con diversas comunidades en el marco de Ethereum México 2023. \n\nEn el camino, sumamos a comunidades locales y regionales, así como a proyectos, organizaciones y entusiastas de Web3.',
    link: 'https://x.com/ethereum_mexico/status/1696684268020273452'
  }
];

function NuestrosLogros() {
  return (
    <div className="container-fluid container-ethmex align-items-center justify-content-center">
      <h1 className="ethmex-primary-title text-center mb-5">Nuestros Logros</h1>
      <div className="container-ethmex-aux mx-auto">
        <div id="carouselHeroEthMex2" className="carousel slide h-100" data-bs-ride="carousel">
          <div className="carousel-indicators ">
            {logros.map((_, index) => (
              <button 
                key={index} 
                type="button" 
                data-bs-target="#carouselHeroEthMex2" 
                data-bs-slide-to={index} 
                className={index === 0 ? 'active' : ''}
                aria-label={`Slide ${index + 1}`}
                style={{ backgroundColor: '#3A3A3A' }}
                
              />
            ))}
          </div>
          <div className="carousel-inner h-100">
            {logros.map((logro, index) => (
              <div key={index} className={`carousel-item logro-carousel-item  logros-carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-top gap-5">
                  <img src={`${process.env.PUBLIC_URL}/images/${logro.img}`} className="d-block img-fluid rounded-4 mx-auto" width="500" alt={logro.alt} />
                  <div className="somos-texto">
                    <span className="ethmex-primary-subtitle">{logro.titulo}</span>
                    <br />
                    <span className="ethmex-text" dangerouslySetInnerHTML={{ __html: logro.descripcion.replace(/\n/g, '<br />') }}/>

                    <br />
                    <a href={logro.link} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-contacto mt-4 mx-auto">Conocer Más</button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev w-auto" type="button" data-bs-target="#carouselHeroEthMex2" data-bs-slide="prev">
            <img src={`${process.env.PUBLIC_URL}/images/arrow-prev.svg`} className="img-fluid carousel-control-prev-icono" alt="arrow-prev" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next w-auto" type="button" data-bs-target="#carouselHeroEthMex2" data-bs-slide="next">
            <img src={`${process.env.PUBLIC_URL}/images/arrow-next.svg`} className="img-fluid carousel-control-next-icono" alt="arrow-next" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NuestrosLogros;
