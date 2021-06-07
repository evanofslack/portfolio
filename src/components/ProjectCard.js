import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  imageContainer: {
    margin: "2vw",
    padding: "0",
    //width: "40vw",
    //height: "auto",
    //width: "40vw",
    //height: "30vh",
    //minWidth: "350px",
    //minHeight: "350px",
    //maxWidth: "450px",
    //maxHeight: "auto",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    //padding: "2px",
    position: "relative",
    display: "block",
  },
  overlay: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: "100%",
    paddingLeft: "1vw",
    paddingRight: "1vw",
    paddingBottom: "0vh",
    //background: "rgba(10,19,56,.7)",
    background: "rgba(255,255,255,.8)",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    justifyContent: "center",
    opacity: "0",
    transition: "opacity 0.3s",
        "&:hover": {
            opacity: "1",
        },
  },
  name: {
    color: "#222533",
    fontSize: "calc(20px + .7vw)",
    fontFamily: "public-sans, sans-serif",
    //fontFamily: "arial",
    marginBottom: "3vh",
    fontWeight: "600",
    textAlign: "center",
  },
  description: {
    color: "#222533",
    fontSize: "calc(12px + .4vw)",
    display: "block",
    margin: "0",
    fontFamily: "public-sans, sans-serif",
    //fontFamily: "arial",
    fontWeight: "350",
    textAlign: "center",
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const {project, name, description} = props;

  return (
    <div className={classes.imageContainer}>
        <img 
            src={`static/projects/${project}/cover.png`}
            alt="project" 
            className={classes.image}/>
        <div className={classes.overlay}>
            <div className={classes.name}>
                {name}
            </div>
            <div className={classes.description}>
                {description}
            </div>
        </div>
    </div>
  
  );
}