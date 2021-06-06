import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import ProjectCard from './ProjectCard';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        padding: "0vw",
    },
    title: {
        padding: "2vw",
        fontSize: "calc(24px + 1.2vw)",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "public-sans, sans-serif",
    },
    container: {
        display: "flex",
        justifyContent: "center",
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
            <ProjectCard project="macropad" name="MacroPad" description="Custom PCB, electronics housing, and software integration"/>
            <ProjectCard project="toothbrush" name="Toothbrush Tester " description="Lifetime simulation device designed for the Tufts Dental School"/>
            <ProjectCard project="splitflap" name="Splitflap Display" description="Designed improved housing for opensource project"/>
          </div>
      </div>
      
  );
}

// <ProjectCard project="toothbrush" name="Toothbrush " description="Lifetime simulation device "/>