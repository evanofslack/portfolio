import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "./Template";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
}));
export default function Spotify() {
    const classes = useStyles();
    const project = "macropad";
    const github = "https://github.com/evanofslack/MacroPad";
    const techList = ["KiCad", "Python", "SolidWorks"];
    return (
        <div className={classes.root}>
            <Template
                title="MacroPad"
                project={project}
                tagline="Custom HID Controller"
                description="Motivated by the seemingly endless amount of zoom meetings, I wanted a quick and fun way to
                interface with my computer. Utilizing a custom designed PCB, laser-cut housing, and open-source software, 
                I created a miniature keyboard capable of executing programable shortcuts. "
                timeframe="3 weeks"
                github={github}
                techList={techList}
            ></Template>
        </div>
    );
}
