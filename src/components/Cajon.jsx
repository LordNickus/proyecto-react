import React from 'react'
import {makeStyles, Drawer, Divider} from '@material-ui/core'
import Listas from './Listas'

const estilos = makeStyles(theme => ({
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPapper:{
        width: 240,
    },
    toolbar: theme.mixins.toolbar,
    appBar: {
        top: 'auto',
        bottom: 0,
      },
}))

const Cajon = (props)=>{
    const classes = estilos()
    return (
        <Drawer
            className={classes.drawer}
            
            classes={{
                paper: classes.drawerPapper,
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div></div>
            <Divider/>
            <Listas />
        </Drawer>
    )
}


export default Cajon