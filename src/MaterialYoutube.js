import React from 'react';
// import {Button, Icon} from '@material-ui/core';
// import {Delete} from '@material-ui/icons'
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import SvgIcon from '@material-ui/core/SvgIcon';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
// import Navbar from './components/Navbar'
// import Listas from './components/Listas'
import Contenedor from './components/Contenedor'

const useStyle = makeStyles({
  estiloBoton1: {
    background: 'linear-gradient(45deg, #00e676 30%, #b2dfdb 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    align:'center',
  }

})

// function MaterialYoutube(){

//   const classes = useStyle()
//   return (
//     <ThemeProvider>
//     <div>
//       <Button>
//         EL MAS BOTON

//       </Button>

//       <Icon>
//         room
//       </Icon>

//       <Button
//         variant= "contained"
//         color="secondary"
//         endIcon={<Delete />}
//       >
//         EL MAS BOTON

//       </Button>


//       <Icon>add_circle</Icon>
//       <Typography variant="srOnly">Crear ususario
//       </Typography>

//       <IconButton aria-label="Delete">
//        <SvgIcon>
//         <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
//         </SvgIcon>
//       </IconButton>

//     </div>
//     <div className="BodyMerme">
//     <Typography variant="h1" color="primary" align="center">
  
//         Mermelandia

//       </Typography>
//       <Typography variant="body1" color="secondary" align="center">
  
//         (Hacemos lo que podemos...)

//       </Typography>

//       <Navbar>

//       </Navbar>
//       <Button className={classes.estiloBoton1}>
//         EL MAS BOTON

//       </Button>
//       <Button 
//         variant= "contained"
//         color="secondary"
//               >
//         EL BOTON personalizado

//       </Button>
//       <Listas />
//     </div>
//     </ThemeProvider>
//   )
// };

function MaterialYoutube(){

  return (
    <ThemeProvider>
      <Contenedor />
    </ThemeProvider>
  )
};
export default MaterialYoutube