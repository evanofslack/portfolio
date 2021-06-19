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
export default function Portfolio() {
    const classes = useStyles();
  return (
    <div className={classes.root}> 
        <Template title="Personal Website">
        </Template>

    </div>
  );
}