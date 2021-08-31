import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCardFeatured from "./ProjectCardFeatured";
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
        //paddingTop: "calc(40px + 3vh)",
        fontSize: "calc(26px + 1.6vw)",
        color: "#3f4047",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "barlow",
        background: "#white",
    },
    title: {
        paddingTop: "calc(30px + 1vh)",
        paddingBottom: "calc(20px + 1vh)",
        borderRadius: "5px",
        wordWrap: "normal",
        overflowWrap: "normal",
        color: "#0a1338",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "2vw",
        paddingLeft: "2vw",
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
                    <div className={classes.title}>Featured</div>
                </div>
                <div className={classes.container}>
                    <Grid container justify="center" alignItems="center" spacing={0}>
                        <Grid item xs={12} sm={6} md={4} justify="center" alignItems="center">
                            <div className={classes.mediaQueryMobile}>
                                <ProjectCard project="toothbrush" name="Toothbrush Tester" />
                            </div>
                            <div className={classes.mediaQueryWeb}>
                                <ProjectCardFeatured
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
                                <ProjectCardFeatured
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
                                    <ProjectCardFeatured
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
