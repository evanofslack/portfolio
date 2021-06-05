import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core';
import myTheme from './themes/myTheme';
import Footer from "./Footer";
import ParticleBackground from "./ParticleBackground";

const useStyles = makeStyles((theme) => ({
    
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        margin: "12vh",
        alignItems: "center",
        justifyContent: "center",
        
    },
    about: {
        width: "70vw",
        padding: "3vw",
        fontWeight: "400",
        color: '#0a1338',
        background: "#dbdbdb",
        borderRadius: ".7vh",
    },    
    imageContainer: {
        display: "flex",
        justifyContent: "left",
        alignItems: "flex-end",
    },
    headerContainer: {
        width: "50%",
        marginRight: "4vw",
    },
    header: {
        fontSize: "calc(30px + 3vw)",
        fontWeight: "600",
        marginTop: "0",
        marginBottom: "5vh",

    },
    image: {
        width: "40%",
        height: "60%",
        borderRadius: ".4vh",
    },
    paragraph: {
        fontSize: "calc(10px + 1vw)",
        lineHeight: "1.6em",
        marginBottom: "0",
    }
})
)
export default function About() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={myTheme}> 
        <div className={classes.root}>
            <Navbar/>
            <div className={classes.container}>
                <div className={classes.about}>
                    <div className={classes.imageContainer}>
                        <div className={classes.headerContainer}>
                            <h1 className={classes.header}>
                                About Me
                            </h1>
                            <p className={classes.paragraph}>
                                I'm passionate about designing integrated products that seamlessly combine hardware and software.
                            </p>
                        </div>
                        <img 
                            src="/static/headshot.png" 
                            alt="headshot" 
                            className={classes.image}/>
                    </div>
                    
                    <p className={classes.paragraph}>
                        As a recent graduate from Tufts University with a degree in Mechanical Engineering, I am skilled 
                        in 3D modeling, rapid prototyping, electronic layout, and embedded software development.
                    </p>
                    <p className={classes.paragraph}>
                        This website showcases my selected work from internships, class projects and personal endeavors. 
                        If you have any questions or inquiries feel free to reach out to me!
                    </p>
                </div>
            </div>
            <Footer/>
            <ParticleBackground/>
        </div>
    </ThemeProvider>
  );
}