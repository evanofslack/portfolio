import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import { ThemeProvider } from "@material-ui/core";
import myTheme from "./themes/myTheme";
import Typed from "./Typed";
import FeaturedProjects from "./FeaturedProjects";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
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
        marginTop: "1vh",
        marginLeft: "8%",
        marginRight: "5%",
        marginBottom: "2vh",
        fontSize: "calc(24px + 5vw)",
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
        paddingBottom: "11vh",
    },
    typing: {
        color: "#40c9a9", // Secondary Turquoise
        fontSize: "calc(9px + 2vw)",
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
        paddingBottom: "2vh",
    },
    projectButton: {
        fontSize: "calc(14px + 1vw)",
        textTransform: "capitalize",
        borderColor: "#0a1338",
        borderStyle: "solid",
        borderRadius: "10px",
        transition: "ease-in .15s",
        "&:hover": {
            background: "#f5f5f5",
            color: "#40c9a9",
            textDecorationThickness: ".3vh",
        },
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
                                <Typed />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.projectCards}>
                    <FeaturedProjects />
                </div>
                <div className={classes.seeAll}>
                    <Button
                        className={classes.projectButton}
                        component={NavLink}
                        to="/projects"
                        exact
                    >
                        All Projects
                        <ChevronRightIcon />
                    </Button>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
