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
export default function Lermon() {
    const classes = useStyles();
    const project = "lermon";
    const techList = ["SolidWorks", "Python", "Sonar"];
    return (
        <div className={classes.root}>
            <Template
                title="LERMON"
                project={project}
                tagline="Autonomous Obstacle Detection"
                description="Leg Extending Robot Making Obstacles Navigable - Coming Soon!"
                timeframe="6 weeks"
                github={false}
                techList={techList}
            ></Template>
            <div className={classes.empty} />
            <Footer />
        </div>
    );
}
