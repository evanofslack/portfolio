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
        boxShadow: "0px 0px 6px lightGray",
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
                            , designing innovative IoT sensors. I've previously interned at &nbsp;{" "}
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
                            These days I find myself jumping from project to project trying to make
                            cool stuff. Whether it be learning about some obscure Python library, 3D
                            printing fun models, or setting up a Docker container, I'm always trying
                            to learn and absorb new technologies. Other than that, I spend my free
                            time taking analog photos on my Nikon FM2, attempting to play golf, and
                            curating my spotify playlists.
                        </p>
                        <p className={classes.paragraph}>
                            If you'd like to collaborate or just have a chat, please feel free to
                            reach out!
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
