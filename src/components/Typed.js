import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import Typewriter from "typewriter-effect";

const useStyles = makeStyles((theme) => ({
    subtitle: {
       // fontSize: "6vw",
        //color: "black",
       // marginLeft: "8%",
        //marginRight: "5%",
        //paddingBottom: "10vw",
        //animation: "$fade ease 2s",
        //wordWrap: "break-word",
        //overflowWrap: "break-word",
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
                strings: [
                "design products ",
                "build robots ",
                "integrate electronics ",
                "create prototypes ",
                "write software ",
                "layout PCBs ",
                ],
                autoStart: true,
                loop: true,
                cursor: "_",
            }}
            />
        </div>
    </ThemeProvider>
  );
}