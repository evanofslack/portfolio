import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/core'
import navTheme from './themes/navTheme'
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
      margin: "0vh",
      position: "sticky",
      top: "0",
      zIndex: "100",
      background: "#02012e",
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
      }
  },
  container: {
      display: "flex",
  },
}));

function Navbar(props) {

    const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (


    <ThemeProvider theme={navTheme}> 
        <div className={classes.root}>
            <Toolbar>
                <div className={classes.container}>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <div className={classes.menu}>Home</div>
                    </Link>
                    <Link to="/about" style={{ textDecoration: "none" }}>
                        <div className={classes.menu}>About</div>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}>
                        <div className={classes.menu}>Contact</div>
                    </Link>
                </div>
            </Toolbar>
        </div>
    </ThemeProvider>






    
  );
}

export default Navbar;
