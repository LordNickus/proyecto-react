import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  toolbar:{
    backgroundColor: 'rgba(15, 160, 2, 0.8)',
    
  },
  
  root: {
    position: 'relative',
    margin: '0 auto',
    width: '300px',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.05),
    '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    
    },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div id="entrada">
      <AppBar position="relative" >
        <Toolbar className={classes.toolbar}>
           <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Que buscas…?"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


// export default function SearchAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="relative" >
//         <Toolbar className={classes.toolbar}>
//            <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Que buscas…?"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }