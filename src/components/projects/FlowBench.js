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
    contributions: {
        backgroundColor: "white",
        paddingRight: "6vw",
        paddingLeft: "6vw",
        paddingBottom: "2vw",
        paddingTop: "10vh",
        margin: "0",
    },
    description: {
        fontSize: "min(8vw, 20px)",
        paddingRight: "2vw",
        color: "#0a0a0a",
        fontWeight: "400",
        paddingBottom: "0vh",
        width: "100%",
    },
    pic1: {
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        position: "relative",
        display: "block",
        padding: "2vh",
        paddingTop: "8vh",
        paddingBottom: "0vh",
        margin: "0",
    },
    pic2: {
        width: "100%",
        maxWidth: "1000px",
        height: "auto",
        position: "relative",
        display: "block",
        padding: "2vh",
        paddingTop: "8vh",
        paddingBottom: "6vh",
        margin: "0",
    },
}));
export default function FlowBench() {
    const classes = useStyles();
    const project = "flowbench";
    const techList = ["Arduino", "LabVIEW", "Computer Vision", "SolidWorks"];
    return (
        <div className={classes.root}>
            <Template
                title="Flowbench"
                project={project}
                tagline="Ink Characterization Jig"
                description="As part of my internship with Solchroma Technologies, I designed a test fixture
                to quantify microfluidic ink flow. The jig was capable of uniformly actuating several ink wells in a controlled
                and repeatable manner while recording and processing the resulting saturation levels of the display's pixels. "
                timeframe="3 months"
                github={false}
                techList={techList}
            ></Template>
            <div className={classes.extra}>
                <img
                    src={`static/projects/${project}/pic2.png`}
                    alt="project"
                    className={classes.pic1}
                />
            </div>
            <div className={classes.contributions}>
                <h1>Project Overview</h1>
                <p className={classes.description}>
                    The device I built allows Solchroma to effectivly test and qualify new designs,
                    greatly accelerating their rapid prototyping cycle. Using machine vision to
                    determine clogs, leaks and other areas of concern saves significant time and
                    material.{" "}
                </p>
                <p className={classes.description}>
                    <li>
                        NI Vision Development Module software to analyze video feed from FLIR
                        machine vision camera.
                    </li>
                    <li>
                        Designed parts in SolidWorks to be CNC machined, waterjet cut, and 3D
                        printed.
                    </li>
                    <li>Linear actuator precisly controlled with Arduino and stepper driver. </li>
                </p>
            </div>
            <div className={classes.extra}>
                <img
                    src={`static/projects/${project}/extra.png`}
                    alt="project"
                    className={classes.pic2}
                />
            </div>
            <Footer />
        </div>
    );
}
