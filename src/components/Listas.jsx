import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText, Divider, makeStyles} from '@material-ui/core'
import WeekendIcon from '@material-ui/icons/Weekend';
import TheatersIcon from '@material-ui/icons/Theaters';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        bottom: 0,
        position: 'absolute',
        top: 'auto',
        },
}))

const Listas = ()=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List component='navApp'>
            <ListItem button>
                <ListItemIcon>
                    <WeekendIcon />
                </ListItemIcon>
                <ListItemText primary='De Finde'/>    
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <TheatersIcon />
                </ListItemIcon>
                <ListItemText primary='De Pelicula'/>    
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary='De Control Paterno'/>    
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <StarBorderIcon />
                </ListItemIcon>
                <ListItemText primary='De lo Mejor'/>    
            </ListItem>
            <Divider />
            <ListItem button>
                <ListItemIcon>
                    <SentimentVerySatisfiedIcon />
                </ListItemIcon>
                <ListItemText primary='Te gusto?'/>    
            </ListItem>
            </List>
        </div>
    )
}
export default Listas
