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
         <Template 
          title="Portfolio Website"
          project = "portfolio"
          tagline="Responsive React App"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat."
          timeframe="2 months"
          github="www.github.com"
          tech="React"
        >
        </Template>

    </div>
  );
}