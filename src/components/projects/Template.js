import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";
import Footer from "../Footer";



const useStyles = makeStyles((theme) => ({
  root: {
      margin: "35vh 5vw",
      fontSize: "5vw",
      color: "#40c9a9",
  },
  
}));

export default function Template(props) {
    const classes = useStyles();

  return (
    <div>
        <Navbar />
        <div className={classes.root}>
            {props.title} - Coming Soon!
        </div>
        <Footer/>
    </div>
  );
}
