import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import myTheme from "./themes/myTheme";
import TextCycler from "./TextCycler";
import FeaturedProjects from "./FeaturedProjects";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    container: {
        background: "#0a1338", // Primary Navy
    },
    name: {
        marginTop: "5vh",
        marginLeft: "8%",
        marginRight: "5%",
        marginBottom: "6vh",
        fontSize: "calc(40px + 4vw)",
        color: "white",
        transform: "translateY(0)",
    },
    gradient: {
        "&:hover": {
            background: "linear-gradient(to right bottom, #430089, #82ffa1)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
        },
    },
    typeContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "8%",
        marginRight: "5%",
        paddingBottom: "12vh",
    },
    typing: {
        color: "#40c9a9", // Secondary Turquoise
        fontSize: "calc(12px + 2vw)",
        fontWeight: "600",
        wordWrap: "break-word",
        overflowWrap: "break-word",
    },

    projectCards: {
        margin: "0",
        padding: "0",
    },
    seeAll: {
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "calc(24px + 5vw)",
        paddingTop: "10px",
        paddingBottom: "2vh",
    },

    projectButton: {
        fontSize: "calc(14px + 1vw)",
        textTransform: "capitalize",
        background: "white",
        borderRadius: "10px",
        boxShadow: ".5px .5px 2px lightGray",
        transition: "ease-in .15s",
        "&:hover": {
            color: "#40c9a9",
            background: "white",
            boxShadow: ".5px .5px 6px lightGray",
        },
    },
    about_header: {
        paddingTop: "110px",
        paddingBottom: "10px",
        borderRadius: "5px",
        wordWrap: "normal",
        overflowWrap: "normal",
        color: "#0a1338",
        background: "#f5f5f5",
        fontSize: "calc(26px + 1.6vw)",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "barlow",
    },
    about_container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#f5f5f5",
        paddingBottom: "65px",
    },
    about: {
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingLeft: "35px",
        paddingRight: "35px",
        width: "70vw",
        maxWidth: "600px",
        borderRadius: "10px",
        wordWrap: "normal",
        overflowWrap: "normal",
        color: "#0a1338",
        background: "white",
        fontSize: "calc(13px + .4vw)",
        fontWeight: "340",
        lineHeight: "1.6em",
        fontFamily: "barlow",
        boxShadow: ".5px .5px 2px lightGray",
    },
    link: {
        textDecoration: "inherit",
        color: "inherit",
    },
    displayMobile: {
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    },
    displayWeb: {
        [theme.breakpoints.down("xs")]: {
            display: "none",
        },
    },
}));
export default function Home() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={myTheme}>
            <div className={classes.root}>
                <div className={classes.container}>
                    <div className={classes.displayMobile}>
                        <MobileNavbar />
                    </div>
                    <div className={classes.displayWeb}>
                        <Navbar />
                    </div>
                    <div>
                        <div className={classes.name}>Hi! I'm Evan</div>
                        <div className={classes.typeContainer}>
                            <div className={classes.typing}>Mechanical Engineer &nbsp;</div>
                            <div className={classes.typing}>and &nbsp;</div>
                            <div className={classes.typing}>
                                <TextCycler />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.projectCards}>
                    <FeaturedProjects />
                </div>
                <div className={classes.seeAll}>
                    <Button
                        disableRipple
                        className={classes.projectButton}
                        component={NavLink}
                        to="/projects"
                        exact
                    >
                        All Projects
                        <ChevronRightIcon />
                    </Button>
                </div>
                <div className={classes.about_header}>About Me</div>
                <div className={classes.about_container}>
                    <p className={classes.about}>
                        I'm a design oriented engineer with experience across the full stack.
                        Currently working at Sensata Technologies creating IoT sensors.
                        <br></br>
                        <br></br>I take a creative approach to problem solving, leveraging my
                        experience across many domains. From laying out a PCB and writing embedded
                        firmware all the way up to deploying a fullstack web application, I'm always
                        learning and building with new technologies.
                        <br></br>
                        <br></br>
                        Read a bit more about me{" "}
                        <Link className={classes.link} to="/about">
                            <u>here</u> or{" "}
                        </Link>
                        <a className={classes.link} href="mailto:evan.slack@outlook.com">
                            <u>contact me</u>.
                        </a>
                    </p>
                </div>

                <Footer />
            </div>
        </ThemeProvider>
    );
}
