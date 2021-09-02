import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "./Template";
import Footer from "../Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
    empty: {
        width: "auto",
        height: "80vh",
        background: "white",
    },
}));
export default function Inchworm() {
    const classes = useStyles();
    const project = "inchworm";
    const techList = ["SolidWorks", "Python", "Illustrator"];
    return (
        <div className={classes.root}>
            <Template
                title="CrawlerBot"
                project={project}
                tagline="Robotic Inchworm"
                description="Coming soon!"
                timeframe="2 weeks"
                github={false}
                techList={techList}
            ></Template>
            <div className={classes.empty} />
            <Footer />
        </div>
    );
}
