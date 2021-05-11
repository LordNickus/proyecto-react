import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Navegador from './components/Navegador';
import Header from './components/Header';

function Home() {

  return (
  <div>
    <Header></Header>
    
    <header id="hmid">
        <img src="imagenes/Logo2.jpeg" alt="logo"width="150" height="150"/>

    </header>

    <nav id="linksnav">
        <div className="hamburguesa">
            <img src="imagenes/menu.svg"/>
        </div>
        <Navegador></Navegador>
        <Button variant="contained" color="secondary">
        <Link to='/MaterialYoutube'>Super App Secreta!</Link>
      </Button>
        
    </nav>

<div className="central">    

    <section id="imagen1">
        <h2>NOSOTROS</h2>
        <img className="imgcentral1"src="imagenes/-Inserte_título_aquí-.png" width="500" height="350"/>
        <div className="textocentral1">
        <p>Este es un parrafo para describir algo referente a los creadores de
            la web, que deben ser personas muy muy inteligentes porque me contrataron a mi para esto...</p>
        </div>   
    </section>


    <section id="entrada">
        <div id="botonentrada">
            <button>Metete aca!</button>
        </div>
        <div>
        <img className="imgcentral1"src="imagenes/su-texto-aquí-.jpg" width="500" height="350"/>
    </div>

    </section>

</div>

<div className="triple">    

    <section id="noticias">
        <h2>NOTICIAS</h2>
        <img className="imgtriple1"src="imagenes/-Inserte_título_aquí-.png" width="200" height="200"/>
        <div className="textocentral2">
            <p>Este es un parrafo para incluir noticias actuales.</p>
        </div>  
    </section>


    <section id="viajes">
        <h2>VIAJES</h2>
        <div id="botonviaje">
            <button>Metete aca!</button>
        </div>
        <div>
        <img className="imgtriple1"src="imagenes/su-texto-aquí-.jpg" width="200" height="200"/>
        </div>
        <div className="textocentral2">
            <p>Este es un parrafo para incluir hermosos destinos para visitar.</p>
        </div> 
    </section>
    <section id="consejos">
        <h2>CONSEJOS</h2>
        <div id="botonentrada">
            <button>Metete aca!</button>
        </div>
        <div>
            <img className="imgtriple1"src="imagenes/su-texto-aquí-.jpg" width="200" height="200"/>
        </div>
        <div className="textocentral2">
            <p>Este es sector para aconsejarte en tus viajes.</p>
        </div> 
    </section>

</div>
    <footer>
        <p>Suscribite al mejor newsletter</p>
        <form action="" method="post">
            <input type="text" />    
            <button>Enviar</button>               
        </form>

        <h1>Este es el pie</h1>
        <div className="piepagina">
            <p>Y aca pondriamos las letras chiquitas,
            con los derechos reservados, las redes,
            y alguna gilada mas...            
            </p>
        </div>

    </footer>

    <div className="cookie">
        En este sitio utilizamos cookies, te guste o no acepta.
        <a href="#">Aceptar</a>
    </div>
  </div>
  )
}


export default Home;
