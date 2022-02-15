import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from "@material-ui/core";
import navTheme from "./themes/navTheme";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "0vh",
        top: "0",
        zIndex: "1",
        background: "#0a1338",
        paddingLeft: "4.5vw",
        paddingRight: "3vw",
        paddingTop: "2vw",
        paddingBottom: "2vw",
    },
    menu: {
        fontFamily: "karla",
        fontSize: "calc(12px + .6vw)",
        color: "white",
        margin: "1vw",
        textTransform: "None",

        "&:hover": {
            color: "#ede477",
            textDecoration: "underline",
            textDecorationThickness: ".3vh",
        },
        "&.active": {
            color: "#ede477",
        },
    },
    links: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        textTransform: "lowercase",
    },
    name: {
        fontFamily: "karla",
        fontSize: "calc(18px + .6vw)",
        fontWeight: "400",
        color: "#f5f5f5",
        textTransform: "none",
    },
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={navTheme}>
            <div className={classes.root}>
                <Toolbar>
                    <div className={classes.container}>
                        <Button
                            className={classes.name}
                            disableRipple
                            component={NavLink}
                            to="/"
                            exact
                        >
                            {" "}
                            es.dev{" "}
                        </Button>
                        <div className={classes.links}>
                            <Button
                                disableRipple
                                className={classes.menu}
                                component={NavLink}
                                to="/"
                                exact
                            >
                                Home
                            </Button>

                            <Button
                                disableRipple
                                className={classes.menu}
                                component={NavLink}
                                to="/projects"
                                exact
                            >
                                Projects
                            </Button>

                            <Button
                                disableRipple
                                className={classes.menu}
                                component={NavLink}
                                to="/about"
                                exact
                            >
                                About
                            </Button>

                            <Button
                                disableRipple
                                className={classes.menu}
                                component={NavLink}
                                to="/photography"
                                exact
                            >
                                Photography
                            </Button>
                        </div>
                    </div>
                </Toolbar>
            </div>
        </ThemeProvider>
    );
}
