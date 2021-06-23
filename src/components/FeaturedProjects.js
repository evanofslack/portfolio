import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from './ProjectCard';
import Grid from '@material-ui/core/Grid';
import bodyTheme from './themes/bodyTheme'
import { ThemeProvider } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "white",
        padding: "0vw",
    },
    spacing: {
        paddingTop: "calc(40px + 3vh)",
        fontSize: "calc(26px + 1.6vw)",
        color: "#3f4047",
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "barlow", 
        background: "#white",
        
    },
    title: {

      borderRadius: "5px",
      wordWrap: "normal",
      overflowWrap: "normal",

    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: "5vw",
        paddingLeft: "5vw",
        paddingBottom: "2vw",
    },
})
)

export default function FeaturedProjects() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={bodyTheme}>
        <div className={classes.root}>
          <div className={classes.spacing}>

          
            <div className={classes.title}>
              Featured
            </div>
          </div>
          <div className={classes.container}>
              <Grid container justify="center" alignItems="center" spacing={0}>
                  <Grid item xs={12} sm={6} justify="center" alignItems="center">
                    <ProjectCard project="toothbrush" name="Toothbrush Tester" description="Brushing simulation device designed for Tufts Dental School"/>
                  </Grid>
                  <Grid item xs={12} sm={6} justify="center" alignItems="center">
                    <ProjectCard project="macropad" name="MacroPad" description="Custom PCB, 3D-printed enclosure, and software integration"/>
                  </Grid>
                  <Grid item xs={12} sm={6} justify="center" alignItems="center">
                      <ProjectCard project="splitflap" name="Splitflap Display" description="Acrylic enclosure for opensource project"/>
                  </Grid>
                  <Grid item xs={12} sm={6} justify="center" alignItems="center">
                      <ProjectCard project="spotify" name="e-Paper Spotify Clock" description="E-Ink screen that displays time, weather, and what I'm listening to on Spotify"/>
                  </Grid>
              </Grid>
          </div>
      </div>
    </ThemeProvider> 
      
      
  );
}