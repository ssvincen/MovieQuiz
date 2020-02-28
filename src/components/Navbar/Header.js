import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles(makeStyles);

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                
                </IconButton>
                <Typography variant="h6" color="inherit">
                Movie Quiz
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
