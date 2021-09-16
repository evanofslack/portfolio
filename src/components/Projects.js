import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from "@material-ui/core";
import myTheme from "./themes/myTheme";
import ProjectCard from "./ProjectCard";
import Grid from "@material-ui/core/Grid";
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
        paddingTop: "calc(30px + 1vh)",
        paddingBottom: "calc(20px + 1vh)",
        fontSize: "calc(26px + 1.6vw)",
        color: "#0a1338",
        //color: "#3f4047",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "barlow",
        backgroundColor: "#f5f5f5",
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "2vw",
        paddingLeft: "2vw",
        paddingBottom: "2vw",
        backgroundColor: "#f5f5f5",
    },
    shadow: {
        backgroundColor: "#f5f5f5",
    },
    WIP: {
        //marginTop: "4vh",
        marginBottom: "4vh",
        fontSize: "calc(16px + 1.4vw)",
    },
}));
export default function Projects() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={myTheme}>
            <div className={classes.root}>
                <div className={classes.navbar}>
                    <Navbar />
                </div>
                <div className={classes.title}>Projects</div>
                <div className={classes.container}>
                    <Grid container justify="center" alignItems="flex-start" spacing={0}>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="flowbench"
                                name="FlowBench"
                                description="Jig to quantify microfluidic inkflow"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="toothbrush"
                                name="Toothbrush Tester"
                                description="Lifetime brushing simulation device"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="writingrobot"
                                name="Handwriting Robot"
                                description="3-DOF robotic arm capable of writing characters"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="glaucoma"
                                name="VisionAiry"
                                description="Self-administered glaucoma monitoring device"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="macropad"
                                name="MacroPad"
                                description="Custom PCB and 3D printed housing"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="lermon"
                                name="Autonomous Biped"
                                description="Obstacle detection and navigation"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="splitflap"
                                name="Splitflap Display"
                                description="Acrylic enclosure for opensource project"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="spotify"
                                name="e-Paper Spotify Clock"
                                description="E-Ink screen that displays my Spotify feed"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="inchworm"
                                name="CrawlerBot"
                                description="The inchworm's robotic counterpart"
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                        <ProjectCard project="inkdisplay" name="Display Frame" description="Modular and expandable frame for integration and testing"/>
                    </Grid> */}
                        {/* <Grid item xs={12} sm={6} lg={4} justify="center" alignItems="center">
                            <ProjectCard
                                project="portfolio"
                                name="Personal Website"
                                description="Created with React.js and hosted with Netlify"
                            />
                        </Grid> */}
                    </Grid>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
