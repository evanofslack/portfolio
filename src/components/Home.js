import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#02012e',
        paddingBottom: "10vh",

    },
    name: {
        marginTop: "10vh",
        marginLeft: "20vh",
        marginRight: "10vh",
        marginBottom: "6vh",
        fontSize: "7vh",
        color: 'white',
    },
    subtitle: {
        fontSize: "14vh",
        color: "white",
        marginLeft: "20vh",
        marginRight: "10vh",
        marginBottom: "10vh",
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
                Hi! I'm Evan Slack
            </div>
            <div className={classes.subtitle}>
                I'm a mechanical engineer
            </div>
        </div>
    </ThemeProvider>
  );
}