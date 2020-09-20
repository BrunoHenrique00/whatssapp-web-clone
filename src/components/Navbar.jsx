import React from 'react';
import { AppBar,Toolbar, Switch } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    background: {
      height: 130,
      width: "100%",
      top: 0,
      background: '#128c7e',
      zIndex: 99,
     
    },
    backgroundDark: {
      height: 130,
      width: "100%",
      top: 0,
      background: '#161616',
      zIndex: 99,
     
    },
    switch: {
      zIndex: 999,
    },
});

export default function Navbar({isDark, handleDarkMode}) {
    const classes = useStyles()
  
    return (
        <AppBar className={isDark ? classes.backgroundDark :classes.background} position='static'>
          <Toolbar variant="dense">
          </Toolbar>
          <Switch 
            className={classes.switch}
            checked={isDark}
            onChange={handleDarkMode}
          />
        </AppBar>
    );
}