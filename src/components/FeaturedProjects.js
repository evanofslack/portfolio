import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import ProjectCard from './ProjectCard';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        padding: "2vw",
    },
    title: {
        padding: "3vw",
        fontSize: "calc(30px + 3vw)",
        fontWeight: "600",
        textAlign: "center",
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",

    },
})
)

export default function FeaturedProjects() {
    const classes = useStyles();
  return (
      <div className={classes.root}>
          <div className={classes.title}>
            Featured Projects
          </div>
          <div className={classes.container}>
            <ProjectCard project="macropad" name="MacroPad" description="Custom PCB"/>
            <ProjectCard project="toothbrush" name="Toothbrush " description="Lifetime simulation device "/>
          </div>
      </div>
      
  );
}

// <ProjectCard project="toothbrush" name="Toothbrush " description="Lifetime simulation device "/>