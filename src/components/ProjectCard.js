import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  imageContainer: {
    margin: "1vw",
    padding: "0",
    width: "40vw",
    height: "30vh",
    minWidth: "350px",
    minHeight: "350px",
    maxWidth: "450px",
    maxHeight: "auto",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
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
    paddingBottom: "8vh",
    background: "rgba(255,255,255,.8)",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    opacity: "0",
    transition: "opacity 0.5s",
        "&:hover": {
            opacity: "1",
        },
  },
  name: {
    fontSize: "calc(16px + .7vw)",
      fontFamily: "public-sans, sans-serif",
      marginBottom: "1vh",
      fontWeight: "500",
      textAlign: "left",
  },
  description: {
    fontSize: "calc(10px + .4vw)",
      display: "block",
      margin: "0",
      fontFamily: "public-sans, sans-serif",
      fontWeight: "350",
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