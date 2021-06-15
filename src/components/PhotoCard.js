import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  imageContainer: {
    margin: "1vw",
    padding: "0",
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
    background: "rgba(255,255,255,0)",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
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
    color: "white",
    fontSize: "calc(14px + .4vw)",
    fontFamily: "public-sans, sans-serif",
    marginBottom: "1.5vh",
    fontWeight: "400",
    textAlign: "left",
    transform: "translateY(8px)",
    transition: "transform 0.5s",
  },
});

export default function PhotoCard(props) {
  const classes = useStyles();
  const {photoNumber, name} = props;

  return (
    <div className={classes.imageContainer}>
        <img 
              src={`static/photos/${photoNumber}.jpeg`}
              alt="analog" 
              className={classes.image}/>
          <div className={classes.overlay}>
              <div className={classes.name}>
                  {name}
              </div>
          </div>
    </div>
  
  );
}