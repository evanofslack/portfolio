import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "./Template";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
}));
export default function WritingRobot() {
    const classes = useStyles();
    const project = "writingrobot";
    const techList = ["Python", "Raspberry Pi", "2D Kinematics"];
    return (
        <div className={classes.root}>
            <Template
                title="Handwriting Robot"
                project={project}
                tagline="Expo Marker Writer"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat."
                timeframe="2 weeks"
                github={false}
                techList={techList}
            ></Template>
        </div>
    );
}
