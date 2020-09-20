import React from 'react';
import { Grid,Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatBox from './ChatBox';
import ListLeft from './ListLeft'

const useStyles = makeStyles({
    root: {
        padding: "0em 15em",
        marginTop: -90,
        zIndex: 9,
        position: "absolute",
          
      },
      rootDark:{
        padding: "0em 15em",
        marginTop: -90,
        zIndex: 9,
        position: "absolute",
        background: '#161616',
      },
      card: {
        display: "flex",
        height: "46em",
        zIndex: 999,
        marginBottom: '199px'
      },
});

export default function Chat({isDark}) {
    const classes = useStyles()
  
    return (
        <>
        <Grid container className={isDark ? classes.rootDark : classes.root}>
            <Grid item xs={12}>
                <Card className={classes.card}>
                    <Grid container>
                        <ListLeft />
                        <ChatBox />
                    </Grid>
                </Card>
            </Grid>
        </Grid>
        </>
    );
}