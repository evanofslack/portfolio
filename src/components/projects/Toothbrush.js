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
export default function Spotify() {
    const classes = useStyles();
    const techList = ["SolidWorks", "Arduino", "FDM Printing", "Systems Integration"];
    return (
        <div className={classes.root}>
            <Template
                title="Toothbrush Tester"
                project="toothbrush"
                tagline="Lifetime Simulation Device"
                description="In collaboration with the Tufts Dental School, I worked with a team of four engineers to design and build a lifetime
                simulation device capable of stress testing up to 10 toothbrushes over thousands of cycles. After lots of iterating and testing, we
                delivered a fully functional prototype and were awarded the James O'Leary award for most outstanding capstone design out of 60 other students."
                timeframe="4 months"
                techList={techList}
            ></Template>
        </div>
    );
}
