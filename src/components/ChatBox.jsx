import React from 'react';
import { Grid, CardHeader ,Avatar, IconButton, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    content: {
        marginTop: 0
      },
      rightContainer: {
        background:
          "url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center",
        flex: 1
      },
      heightAdjust: {
        display: "flex",
        flexDirection: "column"
      },
});

export default function RightContainer(){
    const classes = useStyles()

    return (<Grid className={classes.heightAdjust} item xs={9}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="Recipe" >
                        
                    </Avatar>
                    }
                    action={
                    <IconButton>
                        
                    </IconButton>
                    }
                    title="Bruno Henrique"
                />
                <CardContent className={[classes.rightContainer, classes.content]} />
            </Grid>
    )};