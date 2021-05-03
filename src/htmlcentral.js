var productContainer = document.querySelector('.redesTop')
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

for(var i=0; i<redesSociales.length; i++){
    productContainer.innerHTML += '<img src="' + redesSociales[i].logoImagen + '"alt="' + redesSociales[i].alterno + 
    '"width="30" height="30"/><a>' + redesSociales[i].marcaImagen + '</a>'
}

// menu del nav //


var menuContainer = document.querySelector('.menulista')
var menusLista =[
    { destinoHtml : 'a1_nosotros',
      menuPricipal : 'Nosotros',
      subLinks :[{
          destinoHtml : 'a1_nosotros.html#Anne',
          menuPricipal : 'Anne',
        },
        {
          destinoHtml : 'a1_nosotros.html#Franco',
          menuPricipal : 'Franco',
        }],
    },
    {   destinoHtml : 'a2_noticias',
        menuPricipal : 'Noticias',
        subLinks : [{
          destinoHtml : 'a2_noticias.html#Nacionales',
          menuPricipal : 'Nacionales',
      },
      {
         destinoHtml : 'a2_noticias.html#Internacionales',
         menuPricipal : 'Internacionales',
      },
      {  
         destinoHtml : 'a2_noticias.html#cambioMoneda',
         menuPricipal : 'Cambio Monedas',
      }],
    },
    {   destinoHtml : 'a3_viajes',
        menuPricipal : 'Viajes',
        subLinks : [{
          destinoHtml : 'a3_viajes.html#Lugares Imperdibles',
          menuPricipal : 'Lugares Imperdibles',
      },
      {
          destinoHtml : 'a3_viajes.html#Donde dormir?',
          menuPricipal : 'Donde dormir?',
      },
      {
          destinoHtml : 'a3_viajes.html#Donde comer?',
          menuPricipal : 'Donde comer?',
      },
      {
          destinoHtml : 'a3_viajes.html#Que hacer?',
          menuPricipal : 'Que hacer?',
      },
      {
          destinoHtml : 'a3_viajes.html#Visita Obligada',
          menuPricipal : 'Visita Obligada',
      }],
    },
    {   destinoHtml : 'a4_consejos',
        menuPricipal : 'Consejos',
        subLinks : [{
          destinoHtml : 'a4_consejos.html#Estaciones de Servicios',
          menuPricipal : 'Estaciones de Servicios',
      },
      {
          destinoHtml : 'a4_consejos.html#Bancos/Cajeros/Cashbank',
          menuPricipal : 'Bancos/Cajeros/Cashbank',
      },
      {
          destinoHtml : 'a4_consejos.html#Info util Pre-viaje',
          menuPricipal : 'Info util Pre-viaje',
      },
      {
          destinoHtml : 'a4_consejos.html#Estaciones climaticas',
          menuPricipal : 'Estaciones climaticas',
      }],
    },
    { destinoHtml : 'a5_rinconp',
      menuPricipal : 'El rincon perezoso',
      subLinks : []
      },
]
var navMenu=""
 for(var i=0; i<menusLista.length; i++) {
 navMenu+='<li class="menu"><a href="' + menusLista[i].destinoHtml + '.html">'
  + menusLista[i].menuPricipal + '</a><ul class="subm">';
  for(var j=0; j<menusLista[i].subLinks.length; j++) {
    navMenu += '<li><a href="'+ menusLista[i].subLinks[j].destinoHtml + '">' + 
    menusLista[i].subLinks[j].menuPricipal + '</a></li>';    
      } 
      navMenu+='</ul></li>'
    }
    menuContainer.innerHTML+=navMenu
         
// cartel de las cookies abajo // 
var aceptar = document.querySelector('.cookie a')
var mostrarmensaje = false
var cartelcookies = document.querySelector('.cookie')

if(mostrarmensaje){
    cartelcookies.style.display='none'
}

aceptar.addEventListener('click', function(){
    cartelcookies.style.display='none'
}
)

// enviar mail//
//footer form button//
var botonEnviar = document.querySelector('footer form button')

botonEnviar.addEventListener('click', function() {
    botonEnviar.parentElement.remove()

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Muchas gracias! Pronto nos comunicamos."
 
    document.querySelector('footer').appendChild(parrafo)
})

