import React from 'react';
import { Grid,Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatBox from './ChatBox';
import ListLeft from './ListLeft'

const useStyles = makeStyles({
    root: {
        padding: "0em 15em",
        marginTop: -100,
        zIndex: 999,
        position: "absolute"
      },
      card: {
        display: "flex",
        height: "46em"
      },
});

export default function Chat() {
    const classes = useStyles()
  
    return (
        <>
        <Grid container className={classes.root}>
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