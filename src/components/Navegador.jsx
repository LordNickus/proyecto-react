import React from 'react'
import {Link} from 'react-router-dom'

const Navegador = ()=> {
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
    return (
        <div>
        {
           menusLista.map(function(dato){
            return <div className="menulista" key={dato.destinoHtml}>
                     <li className="menu"><Link to={dato.destinoHtml}>{dato.menuPricipal}</Link></li>
                    </div>
           })
        }
    
        </div>


)}

export default Navegador