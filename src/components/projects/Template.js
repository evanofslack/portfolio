import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";
import Footer from "../Footer";



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: "2vw",
  },
  pic1: {
    maxWidth: "100%",
    height: "auto",
    position: "relative",
    display: "block",
    padding: "2vh",
    paddingTop: "5vh",
    paddingBottom: "3vh",
  },
  pic1Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
      //margin: "35vh 5vw",
      fontSize: "min(10vw, 50px)",
      color: "#0a0a0a",
      margin: "0",
      padding: "0",
      lineHeight: "40px",
      marginTop: "-0px",
  },
  tagline: {
    fontSize: "min(8vw, 35px)",
    color: "#0a0a0a",
    fontWeight: "400",
    margin: "0",
    padding: "0",
    //paddingBottom: "4vh",
  },
  description: {
    fontSize: "min(5vw, 22px)",
    color: "#0a0a0a",
    fontWeight: "400",
    paddingBottom: "0vh",
  },
overview: {
  //display: "flex",
},
overviewElement: {
  fontSize: "min(5vw, 22px)",
  paddingTop: "2vh",
  paddingBottom: "2vh",
  fontWeight: "650",
},
overviewDesc: {
  fontSize: "min(4.3vw, 20px)",
  color: "#0a0a0a",
  fontWeight: "400",
  margin: "0",
  padding: "0",
  //paddingBottom: "4vh",
},
  empty: {
    height: "80vh",
  },
  
}));

export default function Template(props) {
    const classes = useStyles();
    const {project, title, tagline, description, timeframe, github, tech} = props;

  return (
    <div>
        <Navbar />
        <div className={classes.root}>
          <div className={classes.pic1Container}>
            <img 
              src={`static/projects/${project}/pic1.png`}
              alt="project" 
              className={classes.pic1}
            />
          </div>
            
          <h5 className={classes.title}>{title}</h5>
          <h6 className={classes.tagline}>{tagline}</h6>
          <p className={classes.description}>{description}</p>
          <div className={classes.overview}>
            <div className={classes.overviewElement}>
              Time Frame: 
              <p className={classes.overviewDesc}>
                {timeframe}
              </p>
            </div>
            <div className={classes.overviewElement}>
              GitHub:
              <p className={classes.overviewDesc}>
                {github}
              </p>
            </div>
            <div className={classes.overviewElement}>
              Technologies:
              <ul className={classes.overviewDesc}>{tech}</ul>
              <ul className={classes.overviewDesc}>{tech}</ul>
              <ul className={classes.overviewDesc}>{tech}</ul>
            </div>

          </div>
          <div className={classes.empty}></div>
         
        </div>
        <Footer/>
    </div>
  );
}
