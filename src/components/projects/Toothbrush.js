import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../Footer";
import Template from "./Template";
import Carousel from "react-material-ui-carousel";

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
        paddingTop: "0vh",
        paddingBottom: "0vh",
        margin: "0",
    },
    pic2: {
        width: "100%",
        maxWidth: "700px",
        height: "auto",
        position: "relative",
        display: "block",
        margin: "0",
    },
    carousel: {
        width: "90vw",
        maxWidth: "900px",
        height: "50vw",
        maxHeight: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    video: {
        backgroundColor: "white",
        paddingRight: "6vw",
        paddingLeft: "6vw",
        paddingBottom: "2vw",
        paddingTop: "10vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0",
    },
}));
export default function Toothbrush() {
    const classes = useStyles();
    const project = "toothbrush";
    const techList = ["SolidWorks", "Arduino", "FDM Printing", "Systems Integration"];
    return (
        <div className={classes.root}>
            <Template
                title="Toothbrush Tester"
                project={project}
                tagline="Lifetime Simulation Device"
                description="In collaboration with the Tufts Dental School, I worked with a team of four engineers to design and build a lifetime
                simulation device capable of stress testing up to 10 toothbrushes over thousands of cycles. After lots of iterating and testing, we
                delivered a fully functional prototype and were awarded the James O'Leary award for most outstanding capstone design out of 50 other students."
                timeframe="4 months"
                github={false}
                techList={techList}
            />
            <div className={classes.extra}>
                <img
                    src={`static/projects/${project}/TBT_closeup.png`}
                    alt="project"
                    className={classes.pic1}
                />
            </div>
            <div className={classes.contributions}>
                <h1>My Contributions</h1>
                <p className={classes.description}>
                    As the owner of several core mechanical concepts, I advanced the hardware all
                    the way from ideation to final product{" "}
                </p>
                <p className={classes.description}>
                    <li>
                        Designed 20+ unique parts in SolidWorks for rapid prototyping with Prussia
                        MK3 printer
                    </li>
                    <li>Maintained 300+ part assembly, while managing BOM, sourcing, and budget</li>
                    <li>Integrated Arduino, motor drivers, DC pump, and LCD screen</li>
                </p>
            </div>
            <div className={classes.extra}>
                <Carousel
                    navButtonsAlwaysVisible={true}
                    fullHeightHover={false}
                    navButtonsProps={{
                        style: {
                            backgroundColor: "grey",
                            borderRadius: "5px",
                        },
                    }}
                    navButtonsWrapperProps={{
                        style: {
                            bottom: "0",
                            top: "unset",
                        },
                    }}
                >
                    <div className={classes.carousel}>
                        <img
                            src={`static/projects/${project}/TBT_top.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>

                    <div className={classes.carousel}>
                        <img
                            src={`static/projects/${project}/TBT_side.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>
                    <div className={classes.carousel}>
                        <img
                            src={`static/projects/${project}/TBT_subassembly.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>
                    <div className={classes.carousel}>
                        <img
                            src={`static/projects/${project}/TBT_offset.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>
                </Carousel>
            </div>
            <div className={classes.video}>
                <h2>Video Demonstration</h2>
                <iframe
                    width="800px"
                    height="451px"
                    src="https://www.youtube.com/embed/Z0ocjP-AUJQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <Footer />
        </div>
    );
}
