import './App.css';
import Carrusel from './components/Carrusel/Carrusel.js';
import Navbar from './components/Navbar/Navbar.js';
import QuienesSomos from './components/QuienesSomos/QuienesSomos.js';
import NuestrosValores from './components/NuestrosValores/NuestrosValores.js';
import QueHacemos from './components/QueHacemos/QueHacemos.js';
import NuestrosLogros from './components/NuestrosLogros/NuestrosLogros.js'
import ConfianNosotros from './components/ConfianNosotros/ConfianNosotros.js';
import Eventos from './components/Eventos/Eventos.js';
import Transparencia from './components/Transparencia/Transparencia.js';
import Faq from './components/FAQ/Faq.js';
import Contactanos from './components/Contactanos/Contactanos.js';
import Footer from './components/Footer/Footer.js';


function App() {
  return (
    <div>
      <div className="container-fluid hero-ethmex ">
        <Navbar />
        <Carrusel />
      </div>
      
      <QuienesSomos />
      <NuestrosValores />
      <QueHacemos />
      <NuestrosLogros />
      <ConfianNosotros />
      <Eventos />
      <Transparencia />
      <Faq />
      <Contactanos />
      <div className="container-fluid hero-footer-ethmex ">
        <Footer />
      </div>
      
    </div>
  );
}

export default App;
