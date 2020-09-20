import React from 'react';
import { Grid, CardHeader ,Avatar, IconButton, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    content: {
        marginTop: 0
      },
      rightContainer: {
        background:
          "url(https://images.unsplash.com/photo-1548113616-32c0de183d17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMzk2fQ&auto=format&fit=crop&w=1351&q=80) center center",
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