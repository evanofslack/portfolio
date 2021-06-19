import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Template from "./Template";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
        overflow: "auto",
    },
})
)
export default function WritingRobot() {
    const classes = useStyles();
  return (
    <div className={classes.root}> 
        <Template title="Writing Robot">
        </Template>

    </div>
  );
}