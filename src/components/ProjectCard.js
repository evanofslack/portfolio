import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  imageContainer: {
    margin: "0",
    padding: "0",
    //maxWidth: "50%",
    //minWidth: "350px",
    width: "50vw",
    height: "50vh",
    //maxHeight: "350px",
    overflow: "hidden",
    position: "relative",
    //display: "flex",
    //justifyContent: "space-around",
    //alignItems: "center",
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
    background: "rgba(0,0,0,.4)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: "0",
    transition: "opacity 0.5s",
        "&:hover": {
            opacity: "1",
        },
  },

  description: {
      fontSize: "5vw",
      display: "block",
      margin: "0",
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
            <div className={classes.description}>
                {name}
                <br/>
                {description}
            </div>

        </div>
    </div>
  
  );
}