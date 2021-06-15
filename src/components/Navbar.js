import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core'
import navTheme from './themes/navTheme'
import MobileNavbar from "./MobileNavbar";
import WebNavbar from "./WebNavbar";

// SETS RESPONSIVE NAVBAR 
// Mobile view: drawer popout menu
// Desktop view: static row menu

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    displayMobile: {
        [theme.breakpoints.up('sm')]: {
          display: "none",
        },
      },
      displayWeb: {
        [theme.breakpoints.down('xs')]: {
          display: "none",
        },
}}));

export default function Navbar() {
    const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={navTheme}> 
        <div>
            <div className={classes.displayMobile}>
                        <MobileNavbar/>
                    </div>
                    <div className={classes.displayWeb}>
                        <WebNavbar/>
                    </div>
            </div>
    </ThemeProvider>
    
  );
}


