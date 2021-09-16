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
    pic1: {
        width: "100%",
        maxWidth: "700px",
        height: "auto",
        position: "relative",
        display: "block",
        padding: "2vh",
        paddingTop: "8vh",
        paddingBottom: "6vh",
        margin: "0",
    },
}));
export default function GlaucomaMonitor() {
    const classes = useStyles();
    const project = "glaucoma";
    const github = false;
    const techList = ["UX/UI", "Product Developement", "PhotoView360"];
    return (
        <div className={classes.root}>
            <Template
                title="VisionAiry"
                project={project}
                tagline="At-home Glaucoma Testing"
                description="With a team of 4 engineers, we tackled an issue we saw in the current telehealth market.
                With market research, surveying, customer analysis, and technical prototyping, we designed an
                at home glaucoma monitor. This project heavily focused on UX/UI and product design."
                timeframe="2 months"
                github={github}
                techList={techList}
            ></Template>
            <div className={classes.extra}>
                <img
                    src={`/static/projects/${project}/pic2.png`}
                    alt="project"
                    className={classes.pic1}
                />
            </div>
            <Footer />
        </div>
    );
}
