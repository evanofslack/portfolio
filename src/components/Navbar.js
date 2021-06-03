import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from '@material-ui/core'
import navTheme from './themes/navTheme'
import Button from '@material-ui/core/Button';
import { NavLink } from  "react-router-dom";



const useStyles = makeStyles((theme) => ({
  root: {
      margin: "0vh",
      top: "0",
      zIndex: "1",
      //background: "#02012e",
      background: "#0a1338",
      padding: "2vh",
  },
  menu: {
      fontFamily: 'karla',
      fontSize: '2.5vh',
      color: "white",
      margin: "1.6vh",
      "&:hover": {
        color: "#ede477",
        textDecoration: "underline",
        textDecorationThickness: ".3vh",
      },
      "&.active": {
        color:'#ede477',
      },
  },
  container: {
      display: "flex",
  },
}));

export default function Navbar() {
    const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={navTheme}> 
        <div className={classes.root}>
            <Toolbar>
                <div className={classes.container}>
                    <Button
                        disableRipple
                        className={classes.menu}
                        component={NavLink}
                        to="/" exact
                    >
                        Home
                    </Button>
                    <Button
                        disableRipple
                        className={classes.menu}
                        component={NavLink}
                        to="/about" exact
                    >
                        About
                    </Button>
                    <Button
                        disableRipple
                        className={classes.menu}
                        component={NavLink}
                        to="/Contact" exact
                    >
                        Contact
                    </Button>
                </div>
            </Toolbar>
        </div>
    </ThemeProvider>
    
  );
}


