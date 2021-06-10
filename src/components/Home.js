import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import Typed from "./Typed";
//import HoverShine from "./HoverShine";
import FeaturedProjects from './FeaturedProjects'
import Footer from "./Footer";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    container: {
        background: "#0a1338",                  // Primary Navy
    },
    name: {
        marginTop: "0vw",
        marginLeft: "8%",
        marginRight: "5%",
        marginBottom: "2vw",
        fontSize: "calc(24px + 5vw)",
        color: 'white',
        transform: "translateY(0)",
        //animation: "$fade linear 1s",         // ANIMATION
    },
    fade: {
        //animation: "$fade linear 1s",          // ANIMATION
    },
    gradient: {
        "&:hover": {
            background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }
    },
    typeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "8%",
        marginRight: "5%",
        //paddingBottom: "8vh",
        paddingBottom: "5vh"
    },
    typing: {  
        color: "#40c9a9",                     // Secondary Turquoise
        fontSize: "calc(16px + 2vw)",
        fontWeight: "600",
        wordWrap: "break-word",
        overflowWrap: "break-word",
        //animation: "$fade linear 1s",     // ANIMATION
    },
    projectCards: {
        //animation: "$fade linear 1s",      // ANIMATION
    },
    "@keyframes fade": {
        "0%": {
            opacity: ".7",
            transform: "translateY(2%)",
        },
        "50%": {
            opacity: ".8",
            transform: "translateY(1%)",
        },
        "100%": {
            opacity: "1",
            //transform: "translateY(0)",
        },
    },    
    "@keyframes fadeDelay": {
        "0%": {
            opacity: "0",
            transform: "translateY(6%)",
        },
        "50%": {
            opacity: "0",
            transform: "translateY(6%)",
        },
        "75%": {
            opacity: "0.8",
            transform: "translateY(0)",
        },
        "100%": {
            opacity: "1",
            transform: "translateY(0)",
        },
    },
})
)
export default function Home() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}> 
        <div className={classes.root}>
            <div className={classes.container}>
                <Navbar/>
                    <div className={classes.fade}>
                        <div className={classes.name}>
                            Hi! I'm Evan
                        </div>
                        <div className={classes.typeContainer}>
                            <div className={classes.typing}>
                                {""} Mechanical Engineer and &nbsp;
                            </div>
                            <div className={classes.typing}>
                                <Typed/>
                            </div>
                        </div>
                    </div>
            </div>
            <div className={classes.projectCards}>
                <FeaturedProjects/>
            </div>
            <Footer/>
        </div>
    </ThemeProvider>
  );
}