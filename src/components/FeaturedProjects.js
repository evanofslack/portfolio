import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import bodyTheme from "./themes/bodyTheme";
import Hidden from "@material-ui/core/Hidden";
import { ThemeProvider } from "@material-ui/core";
import ProjectCard from "./ProjectCard";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f5f5f5",
        [theme.breakpoints.down("xs")]: {
            backgroundColor: "#f5f5f5",
        },
        padding: "0vw",
    },
    spacing: {
        color: "#3f4047",
        textAlign: "center",
    },
    title: {
        fontSize: "calc(20px + 1.6vw)",
        paddingTop: "80px",
        paddingBottom: "15px",
        borderRadius: "5px",
        wordWrap: "normal",
        overflowWrap: "normal",
        color: "#0a1338",
        fontFamily: "manrope",
        fontWeight: "600",
        letterSpacing: "-.11rem",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "4vw",
        paddingLeft: "4vw",
        paddingBottom: "2vw",
    },
    mediaQueryMobile: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    mediaQueryWeb: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));

export default function FeaturedProjects() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={bodyTheme}>
            <div className={classes.root}>
                <div className={classes.spacing}>
                    <div className={classes.title}>Featured &nbsp;Projects</div>
                </div>
                <div className={classes.container}>
                    <Grid container justify="center" alignItems="center" spacing={0}>
                        <Grid item xs={12} sm={6} md={4} justify="center" alignItems="center">
                            <div className={classes.mediaQueryMobile}>
                                <ProjectCard project="toothbrush" name="Toothbrush Tester" />
                            </div>
                            <div className={classes.mediaQueryWeb}>
                                <ProjectCard
                                    project="toothbrush"
                                    name="Toothbrush Tester"
                                    description="Lifetime brushing simulation device"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} justify="center" alignItems="center">
                            <div className={classes.mediaQueryMobile}>
                                <ProjectCard project="macropad" name="MacroPad" />
                            </div>
                            <div className={classes.mediaQueryWeb}>
                                <ProjectCard
                                    project="macropad"
                                    name="MacroPad"
                                    description="Custom PCB and 3D printed housing"
                                />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={0} md={4} justify="center" alignItems="center">
                            <div className={classes.mediaQueryMobile}>
                                <ProjectCard project="spotify" name="e-Paper Spotify Clock" />
                            </div>
                            <div className={classes.mediaQueryWeb}>
                                <Hidden smDown>
                                    <ProjectCard
                                        project="spotify"
                                        name="e-Paper Spotify Clock"
                                        description="E-Ink screen that displays my Spotify feed"
                                    />
                                </Hidden>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ThemeProvider>
    );
}
