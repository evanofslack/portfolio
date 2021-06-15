import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import PhotoCard from './PhotoCard';
import Grid from '@material-ui/core/Grid';
import Footer from "./Footer";


const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    navbar: {
        background: "#0a1338", // Primary Navy
    },
    title: {
        paddingTop: "calc(40px + 3vh)",
        marginBottom: "calc(40px + 3vh)",
        fontSize: "calc(26px + 1.6vw)",
        //color: "#0a1338",
        color: "#3f4047",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "public-sans, sans-serif",
        backgroundColor: "white",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "2vw",
        paddingLeft: "2vw",
        paddingBottom: "2vw",
        paddingTop: "6vh",
        backgroundColor: "white",
    }, 
})
)
export default function Photography() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}> 
        <div className={classes.root}>
            <div className={classes.navbar}>
                <Navbar/>
            </div>
            <div className={classes.title}>
                Analog Captures
                <div className={classes.container}>
                    <Grid container justify="center" alignItems="center" spacing={0}>
                        <Grid item xs={12} sm={12} justify="center" alignItems="center">
                            <PhotoCard photoNumber="1" name="Bondi Skate Park"/>
                        </Grid>
                        <Grid item xs={12} sm={6} justify="center" alignItems="center">
                            <PhotoCard photoNumber="2" name="Bondi Beach"/>
                        </Grid>
                        <Grid item xs={12} sm={6} justify="center" alignItems="center">
                            <PhotoCard photoNumber="3" name="Bondi Icebergs"/>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer/>
        </div>
    </ThemeProvider>
  );
}