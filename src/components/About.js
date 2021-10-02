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
        maxWidth: "700px",
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
        paddingBottom: "2.5vh",
    },
    header: {
        fontSize: "calc(26px + 1.6vw)",
        marginTop: "20px",
        marginBottom: "30px",
        marginRight: "0vw",
        fontFamily: "manrope",
        fontWeight: "600",
        letterSpacing: "-.12rem",
    },
    image: {
        width: "calc(70px + 30%)",
        height: "auto",
        borderRadius: ".4vh",
    },
    paragraph: {
        fontSize: "calc(12px + .4vw)",
        fontWeight: "300",
        lineHeight: "1.6em",
        marginBottom: "0",
        fontFamily: "mada",
        marginRight: "20px",
        marginLeft: "20px",
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
                            I graduated from Tufts University in 2021 with a degree in Mechanical
                            Engineering. During my degree I focused on robotics, hardware design,
                            and user experience.
                        </p>

                        <p className={classes.paragraph}>
                            Currently I'm working as a mechanical design engineer on the new product
                            development team at{" "}
                            <a className={classes.link} href="https://www.sensata.com">
                                Sensata Technologies
                            </a>
                            , designing industrial IoT sensors. I've previously interned at{" "}
                            <a className={classes.link} href="https://solchroma.com">
                                Solchroma Technologies
                            </a>{" "}
                            and{" "}
                            <a className={classes.link} href="https://www.precisionnanosystems.com">
                                Precision Nanosystems.
                            </a>
                        </p>

                        <p className={classes.paragraph}>
                            I spend my free time taking photos on my Nikon FM2, curating my spotify
                            playlists, and struggling to make par on the golf course. My greatest
                            strength is that I'm pretty good at yoyoing. My greatest weakness is how
                            easily I fall down Wikipedia rabbit holes.
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
