import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import Typed from "./Typed";
import HoverShine from "./HoverShine";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    container: {
        background: "#0a1338",
    },
    name: {
        marginTop: "4vw",
        marginLeft: "8%",
        marginRight: "5%",
        marginBottom: "2vw",
        fontSize: "5vw",
        color: 'white',
        animation: "fade 1s",
    },
    fade: {
        animation: "$fade ease 1s",
    },
    gradient: {
        "&:hover": {
            background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }
    },
    projects: {
        width: "100%",
        height: "1000px",
        backgroundColor: "white",
    },
    "@keyframes fade": {
        "0%": {
            opacity: "0",
        },
        "100%": {
            opacity: "1",
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
                            Hi! I'm 
                            <HoverShine>
                                &nbsp;Evan Slack
                            </HoverShine>
                        </div>
                        <Typed/>
                    </div>
            </div>
            <div className={classes.projects}>
            </div>
            <Footer/>
        </div>
    </ThemeProvider>
  );
}