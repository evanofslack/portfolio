import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from "@material-ui/core";
import bodyTheme from "./themes/bodyTheme";
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";
import Email from "./Email";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "8vh 12vh",
        alignItems: "center",
        justifyContent: "center",
    },
    about: {
        width: "70vw",
        paddingLeft: "3vw",
        paddingRight: "3vw",
        paddingBottom: "3vw",
        paddingTop: "3vw",
        fontWeight: "400",
        color: "#0a1338",
        background: "#f5f5f5",
        borderRadius: ".7vh",
    },
    imageContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingBottom: "1.8vh",
    },
    header: {
        fontSize: "calc(30px + 3vw)",
        fontWeight: "600",
        marginTop: "0",
        marginBottom: "0",
        marginRight: "0vw",
        fontFamily: "barlow",
    },
    image: {
        width: "calc(70px + 30%)",
        //height: "calc(120px + 40%)",
        height: "auto",
        borderRadius: ".4vh",
    },
    paragraph: {
        fontSize: "calc(12px + .5vw)",
        fontWeight: "340",
        lineHeight: "1.6em",
        marginBottom: "0",
        fontFamily: "barlow",
    },
    link: {
        textDecoration: "inherit",
        color: "inherit",
    },
    email: {
        title: "Send me an email",
        color: "#0a1338",
    },
}));
export default function About() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={bodyTheme}>
            <div className={classes.root}>
                <Navbar />
                <div className={classes.container}>
                    <div className={classes.about}>
                        <div className={classes.imageContainer}>
                            <h1 className={classes.header}>About Me</h1>
                            <img
                                src="/static/headshot.jpeg"
                                //src="/static/slackSTL.png"
                                alt="headshot"
                                className={classes.image}
                            />
                        </div>

                        <p className={classes.paragraph}>
                            I'm a mechanical engineer with a passion for designing integrated
                            products that seamlessly combine hardware and software.
                        </p>

                        <p className={classes.paragraph}>
                            I'm currently working as a mechanical design engineer on the new product
                            development team at{" "}
                            <a className={classes.link} href="https://www.sensata.com">
                                Sensata Technologies
                            </a>
                            , designing next generation IoT sensors. I've previously interned at
                            &nbsp;{" "}
                            <a className={classes.link} href="https://solchroma.com">
                                Solchroma Technologies
                            </a>{" "}
                            and{" "}
                            <a className={classes.link} href="https://www.precisionnanosystems.com">
                                Precision Nanosystems
                            </a>{" "}
                            as a mechanical engineer.
                        </p>

                        <p className={classes.paragraph}>
                            This website showcases my selected work from internships, class projects
                            and personal endeavors. If you have any questions or inquiries feel free
                            to reach out to me: &nbsp;
                            <a className={classes.email} href="mailto:evan.slack@outlook.com">
                                evan.slack@outlook.com
                            </a>
                        </p>
                        <Email />
                    </div>
                </div>
                <Footer />
                <ParticleBackground />
            </div>
        </ThemeProvider>
    );
}
