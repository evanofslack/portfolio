import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import Footer from "./Footer";
import Email from"./Email"

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        overflow: "auto",
    },
    container: {
        background: "#0a1338",
    },
    name: {
        backgroundColor: "white",
        padding: "5vw",
    },
})
)
export default function Contact() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}> 
    <div className={classes.root}>
        <div className={classes.container}><Navbar/></div>
        <div className={classes.name}><Email/></div>
        <Footer/>
    </div>
    </ThemeProvider>
  );
}