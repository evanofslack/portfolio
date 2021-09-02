import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import Template from "./Template";
import Footer from "../Footer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
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
            <div className={classes.extra}>
                <img
                    src={`/static/projects/${project}/rotate.gif`}
                    alt="project"
                    className={classes.gif}
                />
            </div>
            <div className={classes.contributions}>
                <h1>Project Overview</h1>
                <p className={classes.description}>
                    My first real attempt at PCB layout went surprisingly well. This macropad
                    actually gets a lot of use in my day to day as a media controller.
                </p>
                <p className={classes.description}>
                    <List>
                        <ListItem>
                            - Featuring Raspberry Pi Pico, Cherry MX switches, and a rotary encoder
                        </ListItem>
                        <ListItem>- Board schematic and layout done in KiCAD</ListItem>
                        <ListItem>
                            - Bootstrapped with open-source circuitpython Human Interface Device
                            (HID) library
                        </ListItem>
                        <ListItem>- Custom 3D-printed and laser cut housing</ListItem>
                    </List>
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
                            src={`/static/projects/${project}/layout.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>

                    <div className={classes.carousel}>
                        <img
                            src={`/static/projects/${project}/schematic.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>
                    <div className={classes.carousel}>
                        <img
                            src={`/static/projects/${project}/render1.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>
                    <div className={classes.carousel}>
                        <img
                            src={`/static/projects/${project}/pcb.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </div>
                </Carousel>
            </div>
            <Footer />
        </div>
    );
}
