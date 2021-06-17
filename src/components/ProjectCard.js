import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  imageContainer: {
    margin: "5vw",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
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
    background: "rgba(255,255,255,.8)",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-around",
    justifyContent: "center",
    opacity: "0",
    transition: "ease 0.5s",
        "&:hover": {
            opacity: "1",
            "& $name": {
              transform: "translateY(0)",
            },
            "& $description": {
              transform: "translateY(0)",
            },
        }, 
  },
  name: {
    color: "#3f4047",
    fontSize: "calc(18px + .6vw)",
    fontFamily: "barlow",
    marginBottom: "3vh",
    fontWeight: "500",
    textAlign: "center",
    transform: "translateY(25px)",
    transition: "transform 0.5s",
  },
  description: {
    color: "#3f4047",
    fontSize: "calc(12px + .4vw)",
    display: "block",
    margin: "0",
    fontFamily: "barlow",
    fontWeight: "400",
    textAlign: "center",
    transform: "translateY(25px)",
    transition: "transform 0.5s",
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const {project, name, description} = props;

  return (
    <div className={classes.imageContainer}>
      <Link to={`projects/${project}`}>
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
      </Link> 
    </div>
  
  );
}