import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Grid} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) =>({
    root:{
        borderRadius:6
    },
    image: {
        width: 128,
        height: 128,
      },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius:10
      },

}));


const Cajita = ()=> {
    const classes = useStyles()
    return (
        <div>
          <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/177499455_1978241088996042_602127205732395587_n.jpg"/>
                        
                    </Box> 
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/179669852_323311799153010_684471748596487813_n.jpg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/D_fYbhSXYAEzXdl.png"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/nene_garche.jpg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/memeProg1 (1).jpeg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/memeProg1 (1).jpg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/memeProg1 (2).jpg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/memeProg1 (3).jpg"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className={classes.root}
                     color='primary.contrastText'
                     bgcolor='primary.main'
                    border={3}
                    borderColor='black'
                    m={2}
                    p={4}
                    >
                        <img className={classes.img} alt="meme1" src="imagenes/memeProg1 (4).jpg"/>
                    </Box>
                </Grid>
             </Grid>
    </div>
    )
}


export default Cajita