import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import navTheme from "./themes/navTheme";
import MobileNavbar from "./MobileNavbar";
import WebNavbar from "./WebNavbar";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
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

export default function Navbar() {
    const classes = useStyles();

    return (
        <ThemeProvider theme={navTheme}>
            <div>
                <div className={classes.displayMobile}>
                    <MobileNavbar />
                </div>
                <div className={classes.displayWeb}>
                    <WebNavbar />
                </div>
            </div>
        </ThemeProvider>
    );
}
