import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "./Template";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    extra: {
        backgroundColor: "white",
        paddingRight: "6vw",
        paddingLeft: "6vw",
        paddingBottom: "10vh",
        paddingTop: "4vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
    },
    gif: {
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        position: "relative",
        display: "block",
        padding: "2vh",
        paddingTop: "0vh",
        paddingBottom: "0vh",
        margin: "0",
    },
}));
export default function Spotify() {
    const classes = useStyles();
    const project = "spotify";
    const github = "https://github.com/evanofslack/ePaper-Spotify-Clock";
    const techList = ["Python", "Bash", "API requests", "Adobe Illustrator"];

    return (
        <div className={classes.root}>
            <Template
                title="Spotify Clock"
                project={project}
                tagline="E-Ink Spotify Display"
                description="After seeing another user on Github create an amaing E-Ink display,
                I knew I had to make my own one. The script runs on a Raspberry Pi Zero and calls Spotify's API 
                to get my listening playback. Additionally it displays the local time, date, and weather. 
                I designed a 3D printed base to hold the Pi as well as a lasercut frame which acts as a bezel 
                for the display. "
                timeframe="1 month"
                github={github}
                techList={techList}
            ></Template>
            <div className={classes.extra}>
                <img
                    src={`/static/projects/${project}/demo.gif`}
                    alt="project"
                    className={classes.gif}
                />
            </div>
            <Footer />
        </div>
    );
}
