import React from 'react'
import {makeStyles} from '@material-ui/core'
import Navbar from './Navbar'
import Cajon from './Cajon'

const estilos = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundcolor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))
const Contenedor =()=>{
    const classes = estilos()

    return (
        <div className={classes.root}>
            <Navbar />
            <Cajon />
            <div className={classes.content}>
                <div className={classes.toolbar}>
                </div>
                Proximamente una app de la p#t# MADREEEE!
            </div>
        </div>

    )
}

export default Contenedor