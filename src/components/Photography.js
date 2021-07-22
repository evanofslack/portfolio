import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from "@material-ui/core";
import PhotoCard from "./PhotoCard";
import Grid from "@material-ui/core/Grid";
import Footer from "./Footer";
import bodyTheme from "./themes/bodyTheme";

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
        paddingBottom: "calc(40px + 3vh)",
        fontSize: "calc(26px + 1.6vw)",
        //color: "#0a1338",
        color: "#3f4047",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "barlow",
        backgroundColor: "white",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "5vw",
        paddingLeft: "5vw",
        paddingBottom: "2vw",
        paddingTop: "6vh",
        backgroundColor: "white",
    },
    photoGroup: {
        marginBottom: "3vw",
    },
}));
export default function Photography() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={bodyTheme}>
            <div className={classes.root}>
                <div className={classes.navbar}>
                    <Navbar />
                </div>
                <div className={classes.title}>
                    Analog Captures
                    <div className={classes.container}>
                        <Grid container justify="center" alignItems="center" spacing={0}>
                            <Grid item xs={12} sm={8} justify="center" alignItems="center">
                                <PhotoCard photoNumber="1" name="Bondi Skate Club" />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    spacing={0}
                                >
                                    <Grid item xs={12} justify="center" alignItems="center">
                                        <PhotoCard photoNumber="2" name="Gem of the Sea" />
                                    </Grid>
                                    <Grid item xs={12} justify="center" alignItems="center">
                                        <PhotoCard photoNumber="3" name="The Icebergs" />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={6} justify="center" alignItems="center">
                                <PhotoCard photoNumber="5" name="Captain's Quarters" />
                            </Grid>
                            <Grid item xs={12} sm={6} justify="center" alignItems="center">
                                <PhotoCard photoNumber="6" name="Island Time" />
                            </Grid>
                            <Grid item xs={12} sm={12} justify="center" alignItems="center">
                                <PhotoCard photoNumber="4" name="I-95" />
                            </Grid>

                            <Grid item xs={12} sm={4} justify="center" alignItems="center">
                                <PhotoCard photoNumber="7" name="Faber Point" />
                            </Grid>
                            <Grid item xs={12} sm={8} justify="center" alignItems="center">
                                <PhotoCard photoNumber="8" name="Outlook" />
                            </Grid>

                            <Grid item xs={12} sm={8} justify="center" alignItems="center">
                                <PhotoCard photoNumber="10" name="Descent" />
                            </Grid>
                            <Grid item xs={12} sm={4} justify="center" alignItems="center">
                                <PhotoCard photoNumber="9" name="Next-Gen" />
                            </Grid>

                            <Grid item xs={12} sm={6} justify="center" alignItems="center">
                                <PhotoCard photoNumber="11" name="Brooklyn Stacks" />
                            </Grid>
                            <Grid item xs={12} sm={6} justify="center" alignItems="center">
                                <PhotoCard photoNumber="12" name="United" />
                            </Grid>

                            <Grid item xs={12} sm={4} justify="center" alignItems="center">
                                <PhotoCard photoNumber="15" name="Kits" />
                            </Grid>
                            <Grid item xs={12} sm={8} justify="center" alignItems="center">
                                <PhotoCard photoNumber="13" name="Lion's Gate" />
                            </Grid>

                            <Grid item xs={12} sm={4} justify="center" alignItems="center">
                                <PhotoCard photoNumber="18" name="Koh Pha Ngan" />
                            </Grid>
                            <Grid item xs={12} sm={4} justify="center" alignItems="center">
                                <PhotoCard photoNumber="16" name="Bangkok" />
                            </Grid>
                            <Grid item xs={12} sm={4} justify="center" alignItems="center">
                                <PhotoCard photoNumber="17" name="Skytrain" />
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
