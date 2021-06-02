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
        backgroundColor: '#02012e',
        paddingBottom: "100vh",
    },
    name: {
        marginTop: "10vh",
        marginLeft: "10%",
        marginRight: "5%",
        marginBottom: "6vh",
        fontSize: "7vh",
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
    </ThemeProvider>
  );
}