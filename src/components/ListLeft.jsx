import React from 'react';
import { Grid, CardHeader ,Avatar, Paper, Typography, List, ListItem ,ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    paper: {
        background: "#9de1fe",
        padding: 20
    },
    information: {
        color: "#444"
    },
    rightBorder: {
        borderRight: "solid #d0D0D0 1px"
    },
    friends: {
        paddingRight: 10,
        paddingLeft: 5,
        fontWeight: 'bold',
    },
    message:{
        paddingRight: 10,
        paddingLeft: 5,
    },
});

const list = [
    { id: 1, name: "Party 20/04", text: "Let's do it tomorrow",  },
    { id: 2, name: "Amanda", text: "I will call you back", },
    { id: 3, name: "Jack", text: "Hey man, need some tips on Javascript", }
];

export default function ListLeft(){
    const classes = useStyles()

    return (
    <Grid item xs={3}>
      <CardHeader
        className={classes.rightBorder}
        avatar={
          <Avatar aria-label="Recipe" >
            B
          </Avatar>
        }
      />
      <Paper className={classes.paper} elevation={0}>
        <Typography className={classes.information} variant="subheader">
          WhatsApp Web Clone Made in React!!!
        </Typography>
      </Paper>
      <List>
        {list.map(item => (
          <ListItem>
            <Avatar>{ /*  Put image */ }</Avatar>
            <ListItemText primary={
                <Typography className={classes.friends} >
                    {item.name}
                </Typography>
            } 
            secondary={
                <Typography className={classes.message} variant="subheader">
                    {item.text}
                </Typography>
            } 
            />
          </ListItem>
        ))}
      </List>
    </Grid>
)};