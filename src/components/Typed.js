import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
    subtitle: {
        fontSize: "9vw",
        color: "white",
        marginLeft: "8%",
        marginRight: "5%",
        paddingBottom: "10vw",
        animation: "$fade ease 2s",
        wordWrap: "break-word",
        overflowWrap: "break-word",
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
export default function Typed() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}> 
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
                .typeString('<span style="color: white;">build <b>robots</b></span>')                    .pauseFor(1000)
                .deleteChars(12)
                .typeString('<span style="color: white;">create <b>prototypes</b></span>')
                .pauseFor(1000)
                .deleteChars(17)
                .typeString('<span style="color: white;">write <b>software</b></span>')                    .pauseFor(1000)
                .deleteChars(14)
                .typeString('<span style="color: white;">layout <b>PCBs</b></span>')
                .pauseFor(1000)
                .deleteChars(11)
                .start();
            }}
            />
        </div>
    </ThemeProvider>
  );
}