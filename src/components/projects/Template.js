import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        padding: "2vw",
    },
    pic1: {
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        position: "relative",
        display: "block",
        padding: "2vh",
        paddingTop: "5vh",
        paddingBottom: "3vh",
    },
    pic2: {
        width: "100%",
        maxWidth: "600px",
        height: "auto",
        position: "relative",
        display: "block",
        padding: "2vh",
        paddingTop: "2vh",
        paddingBottom: "2vh",
        margin: "0",
    },
    pic1Container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    body: {
        margin: "3vw",
    },
    title: {
        //margin: "35vh 5vw",
        fontSize: "min(10vw, 50px)",
        color: "#0a0a0a",
        margin: "0",
        padding: "0",
        lineHeight: "40px",
        marginTop: "-0px",
    },
    tagline: {
        fontSize: "min(8vw, 35px)",
        color: "#0a0a0a",
        fontWeight: "400",
        margin: "0",
        padding: "0",
        //paddingBottom: "4vh",
    },
    description: {
        fontSize: "min(5vw, 22px)",
        color: "#0a0a0a",
        fontWeight: "400",
        paddingBottom: "0vh",
        width: "90%",
    },
    overview: {
        //display: "flex",
    },
    overviewElement: {
        fontSize: "min(5vw, 20px)",
        paddingTop: "2vh",
        paddingBottom: "2vh",
        fontWeight: "650",
    },
    overviewDesc: {
        fontSize: "min(4.3vw, 18px)",
        color: "#0a0a0a",
        fontWeight: "400",
        margin: "0",
        padding: "0",
        //paddingBottom: "4vh",
    },
    empty: {
        height: "80vh",
    },
}));

export default function Template(props) {
    const classes = useStyles();
    const { project, title, tagline, description, timeframe, github, techList } = props;
    const listItems = techList.map((tech) => <div>{tech}</div>);

    return (
        <div>
            <Navbar />
            <div className={classes.root}>
                <div className={classes.pic1Container}>
                    <img
                        src={`static/projects/${project}/pic1.png`}
                        alt="project"
                        className={classes.pic1}
                    />
                </div>
                <Grid
                    container
                    direction="row-reverse"
                    justifyContent="center"
                    alignItems="flex-start"
                    className={classes.body}
                >
                    <Grid item xs={12} md={9}>
                        <h5 className={classes.title}>{title}</h5>
                        <h6 className={classes.tagline}>{tagline}</h6>
                        <p className={classes.description}>{description}</p>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Grid container>
                            <Grid item xs={12} sm={4} md={12}>
                                <div className={classes.overviewElement}>
                                    Time Frame:
                                    <p className={classes.overviewDesc}>{timeframe}</p>
                                </div>
                                <div className={classes.overviewElement}>
                                    Github:
                                    <p className={classes.overviewDesc}>{github}</p>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={8} md={12}>
                                <div className={classes.overview}>
                                    <div className={classes.overviewElement}>
                                        Technologies:
                                        <ul className={classes.overviewDesc}>{listItems}</ul>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end" alignItems="center">
                    <Grid item xs={12} md={6}>
                        <img
                            src={`static/projects/${project}/pic2.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src={`static/projects/${project}/pic3.png`}
                            alt="project"
                            className={classes.pic2}
                        />
                    </Grid>
                </Grid>
                <div className={classes.empty}></div>
            </div>
            <Footer />
        </div>
    );
}
