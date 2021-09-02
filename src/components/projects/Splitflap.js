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
    empty: {
        width: "auto",
        height: "80vh",
        background: "white",
    },
}));
export default function Spotify() {
    const classes = useStyles();
    const project = "inchworm";
    const github = "https://github.com/evanofslack/splitflap";
    const techList = ["SolidWorks", "Open Source", "Arduino"];
    return (
        <div className={classes.root}>
            <Template
                title="Splitflap"
                project={project}
                tagline="Rotating 45-Segment Display"
                description="Coming Soon!"
                timeframe="3 weeks"
                github={github}
                techList={techList}
            ></Template>
            <div className={classes.empty} />
            <Footer />
        </div>
    );
}
