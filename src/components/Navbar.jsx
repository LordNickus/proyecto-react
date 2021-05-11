import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchAppBar from './SearchBoton'

const useStyles = makeStyles((theme) => ({
    // offset: theme.mixins.toolbar,
    appBar: {
        width: `calc(100% - ${240}px)`,
        marginLeft: 240,
        top: 'auto',
        bottom: 0,
      },
      grow: {
        flexGrow: 1,
      },
      fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      },
    }));


const Navbar =() => {
    const classes=useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <IconButton color="inherit"className={classes.grow}>
                        Login
                    </IconButton>
                    <SearchAppBar></SearchAppBar>
                </Toolbar>
            </AppBar>
            
        </div>

    )
}

export default Navbar

