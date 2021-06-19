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
export default function GlaucomaMonitor() {
    const classes = useStyles();
  return (
    <div className={classes.root}> 
        <Template title="Glaucoma Monitor">
        </Template>

    </div>
  );
}