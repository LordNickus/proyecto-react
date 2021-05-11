import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { IconButton, makeStyles } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchAppBar from './SearchBoton'

const useStyles = makeStyles((theme) => ({
    // offset: theme.mixins.toolbar,
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
        },
        top: 'auto',
        bottom: 0,
      },
      grow: {
        flexGrow: 1,
      },
      fabButton: {
        position: 'absolute',
        left: 0,
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
      },
    }));


const Navbar =(props) => {
    const classes=useStyles()
    return (
        <div>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                    color="inherit"
                    onClick={()=> props.accionAbrir()}>
                    
                        <MenuIcon className={classes.fabButton} />
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

