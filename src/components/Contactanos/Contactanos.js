import './Contactanos.css';
import React from 'react';



function Contactanos() {
    return (
      <div className="container-fluid container-ethmex align-items-center justify-content-center" id="contactanos">
        
        <br></br>

        <div className="container-ethmex-aux mx-auto">
          <h1 className="ethmex-primary-title text-center">Contáctanos</h1>
          <p className="ethmex-text mx-auto text-center" style={{textAlign: 'left'}}>
          ¿Tienes más preguntas o te gustaría colaborar con nosotros? ¡Ponte en contacto! Pronto te enviaremos una respuesta.
          </p>
          <br></br>
          <form>
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label ethmex-primary-subtitle">Email*</label>
              <input type="email" class="form-control ethmex-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com"></input>
            </div>
            <div class="mb-4">
              <label for="exampleFormControlTextarea1" class="form-label ethmex-primary-subtitle">Comentarios</label>
              <textarea type="password" class="form-control ethmex-input" id="exampleFormControlTextarea1" placeholder="Escribe tus comentarios o preguntas"></textarea>
            </div>
            <button type="submit" class="btn btn-contacto mt-4">Enviar</button>
          </form>



        </div>

      </div>
      )
    ;
  }

export default Contactanos; 