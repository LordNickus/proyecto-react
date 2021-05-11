import './App.css';
import {Link} from 'react-router-dom'

function Consejos() {
    var redesSociales=[
        { logoImagen : 'imagenes/Yout.jpg',
          alterno :'youtube',
          marcaImagen: 'Youtube',
        },           
        { logoImagen : 'imagenes/Face.png',
          alterno :'Facebook',
          marcaImagen: 'Facebook', 
        },
        { logoImagen : 'imagenes/Inst.jpg',
          alterno :'insta',
          marcaImagen: 'Instagram',
        },
        { logoImagen : 'imagenes/Wats.jpg',
          alterno :'wassp',
          marcaImagen: 'Wassap',
        },
        ]
        var menusLista =[
            { destinoHtml : 'Nosotros',
              menuPricipal : 'Nosotros',
              subLinks :[{
                  destinoHtml : 'Nosotros',
                  menuPricipal : 'Anne',
                },
                {
                  destinoHtml : 'Nosotros',
                  menuPricipal : 'Franco',
                }],
            },
            {   destinoHtml : 'Noticias',
                menuPricipal : 'Noticias',
                subLinks : [{
                  destinoHtml : 'Noticias',
                  menuPricipal : 'Nacionales',
              },
              {
                 destinoHtml : 'Noticias',
                 menuPricipal : 'Internacionales',
              },
              {  
                 destinoHtml : 'Noticias',
                 menuPricipal : 'Cambio Monedas',
              }],
            },
            {   destinoHtml : 'Viajes',
                menuPricipal : 'Viajes',
                subLinks : [{
                  destinoHtml : 'Viajes',
                  menuPricipal : 'Lugares Imperdibles',
              },
              {
                  destinoHtml : 'Viajes',
                  menuPricipal : 'Donde dormir?',
              },
              {
                  destinoHtml : 'Viajes',
                  menuPricipal : 'Donde comer?',
              },
              {
                  destinoHtml : 'Viajes',
                  menuPricipal : 'Que hacer?',
              },
              {
                  destinoHtml : 'Viajes',
                  menuPricipal : 'Visita Obligada',
              }],
            },
            {   destinoHtml : 'Consejos',
                menuPricipal : 'Consejos',
                subLinks : [{
                  destinoHtml : 'Consejos',
                  menuPricipal : 'Estaciones de Servicios',
              },
              {
                  destinoHtml : 'Consejos',
                  menuPricipal : 'Bancos/Cajeros/Cashbank',
              },
              {
                  destinoHtml : 'Consejos',
                  menuPricipal : 'Info util Pre-viaje',
              },
              {
                  destinoHtml : 'Consejos',
                  menuPricipal : 'Estaciones climaticas',
              }],
            },
            { destinoHtml : 'ElRincon',
              menuPricipal : 'El rincon perezoso',
              subLinks : []
              },
        ]
        var navMenu=""
  return (
  <div>
    <header id="htop"> 
    
            <div>
                { 
                redesSociales.map(function(dato){
                    return <div className="redesTop" key={dato.logoImagen}>
                      <img src={dato.logoImagen} width = "30" height = "30"/>  
                      {/* {dato.marcaImagen} */}
                      </div>     
                })    
            }                    
            </div> 
            <div id="lupa">
                <button>Que estas buscando?</button>
                <input type="text" />
            <img src="imagenes/Lupa2.png" alt="lupa"width="30" height="30"/>
            </div>
      </header>
    
    <header id="hmid">
        <img src="imagenes/Logo2.jpeg" alt="logo"width="150" height="150"/>

    </header>

    <nav id="linksnav">
        <div className="hamburguesa">
            <img src="imagenes/menu.svg"/>
        </div>
        <div>
        <li className="menu"><Link to='Home'>Inicio</Link></li>
        {
           menusLista.map(function(dato){
            return <div className="menulista" key={dato.destinoHtml}>
              {/* {dato.menuPricipal} */}
              <li className="menu"><Link to={dato.destinoHtml}>{dato.menuPricipal}</Link></li>
                {/* <ul class="subm">}
              {<li><a href="+ menusLista.subLinks.destinoHtml +">' + 
                menusLista.subLinks.menuPricipal + '</a></li>}
              {</ul></li>} */}
              </div>
           })
        }
        
        </div>
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


export default Consejos;
