import React from 'react'

const RedesSocialesTop = ()=> {

    
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
     return (
             <div>
                { 
                redesSociales.map(function(dato){
                    return <div className="redesTop" key={dato.logoImagen}>
                      <img src={dato.logoImagen} width = "30" height = "30"/>  
                      </div>     
                })    
            }                    
            </div> 
)

}
export default RedesSocialesTop