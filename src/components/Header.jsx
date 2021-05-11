import React from 'react';
import '../App.css';
import RedesSocialesTop from './RedesSocialesTop';
import SearchAppBar from './SearchBoton';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
      },

}));

const Header = ()=>{
    const classes = useStyles();
    return(
        <div id="htop">
            <div className={classes.grow}>
            <RedesSocialesTop></RedesSocialesTop></div>
         <div>
            <SearchAppBar></SearchAppBar>
            </div>
            </div>
    )

}


export default Header