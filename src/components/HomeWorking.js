import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#02012e',
        paddingBottom: "5vh",
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
        whiteSpace: "pre",
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
export default function Home() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}> 
        <div className={classes.root}>
            <Navbar/>
            <div className={classes.name}>
                Hi! I'm 
                <span className={classes.gradient}>
                &nbsp;Evan Slack
                </span>
            </div>
            <div className={classes.subtitle}>
                <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString('<span style="color: white;">I design <b>products</b></span>')
                    .pauseFor(1000)
                    .deleteChars(15)
                    .typeString('<span style="color: white;">build <b>robots</b></span>')
                    .pauseFor(1000)
                    .deleteChars(12)
                    .typeString('<span style="color: white;">create <b>prototypes</b></span>')
                    .pauseFor(1000)
                    .deleteChars(17)
                    .typeString('<span style="color: white;">write <b>software</b></span>')
                    .pauseFor(1000)
                    .deleteChars(14)
                    .typeString('<span style="color: white;">layout <b>PCBs</b></span>')
                    .pauseFor(1000)
                    .deleteChars(11)
                    .start();
                }}
                />
            </div>
        </div>
    </ThemeProvider>
  );
}