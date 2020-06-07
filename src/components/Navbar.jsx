import React from 'react';
import { AppBar,Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    background: {
      height: 130,
      width: "100%",
      top: 0,
      background: '#128c7e',
     
    },
});

export default function Navbar() {
    const classes = useStyles()
  
    return (
        <AppBar className={classes.background} position='static'>
          <Toolbar variant="dense">
          </Toolbar>
        </AppBar>
    );
}