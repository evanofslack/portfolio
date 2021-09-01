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
        paddingBottom: "2vw",
        paddingTop: "0vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
    },
    gif: {
        width: "auto",
        maxHeight: "700px",
        height: "auto",
        position: "relative",
        display: "block",
        padding: "2vh",
        paddingTop: "8vh",
        paddingBottom: "6vh",
        margin: "0",
    },
}));
export default function WritingRobot() {
    const classes = useStyles();
    const project = "writingrobot";
    const techList = ["Python", "Numpy", "Scipy", "2D Kinematics"];
    return (
        <div className={classes.root}>
            <Template
                title="Handwriting Robot"
                project={project}
                tagline="Expo Marker Writer"
                description="During a 2 week robotics challenge, I collaborated with another engineer based in China. 
                Despite the 12 hour time difference, we were able to build and code a 2 DOF robotic arm that
                was capable of writing our initials. "
                timeframe="2 weeks"
                github={false}
                techList={techList}
            ></Template>
            <div className={classes.extra}>
                <img
                    src={`static/projects/${project}/write.gif`}
                    alt="project"
                    className={classes.gif}
                />
            </div>
            <Footer />
        </div>
    );
}
