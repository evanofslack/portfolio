import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import HoverShine from "./HoverShine";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    
    root: {
        height: "100vh",
        overflow: "auto",
    },
    container: {
        background: "#0a1338",
        //paddingBottom: "5vh",
        paddingBottom: "2000px",
    },
    name: {
        marginTop: "10vh",
        marginLeft: "10%",
        marginRight: "5%",
        marginBottom: "6vh",
        fontSize: "7vh",
        color: 'white',
    },
    gradient: {
        "&:hover": {
            background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }
        
    },
    subtitle: {
        fontSize: "14vh",
        color: "white",
        marginLeft: "10%",
        marginRight: "5",
        marginBottom: "10vh",
        whiteSpace: "nowrap",
    },
    projects: {
        width: "100%",
        height: "1000px",
        backgroundColor: "black",


    },
})
)
export default function About() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}> 
        <div className={classes.root}>
            <div className={classes.container}>
                <Navbar/>
                <div className={classes.name}>
                    Hi! learn more about
                    <HoverShine>
                        &nbsp;ME
                    </HoverShine>
                </div>
            </div>
            <Footer/>
        </div>
        
    </ThemeProvider>
  );
}