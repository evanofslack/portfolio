import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import myTheme from './themes/myTheme'

const useStyles = makeStyles((theme) => ({
    root: {
        "&:hover": {
            willChange: "auto",
            backgroundRepeat: "no-repeat",
            // gradient from https://products.ls.graphics/mesh-gradients/
            // backgroundImage:
            //   'url("https://products.ls.graphics/mesh-gradients/images/05.-Flax.jpg")',
            backgroundImage: 'url("static/yellow.jpg")',
            backgroundSize: "100%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            animation: "$bg 4s cubic-bezier(0.77, 0, 0.175, 1) 3s infinite",
          },
        
      },
      "@keyframes bg": {
        "0%": {
          backgroundPosition: "5% 5%",
        },
        "25%": {
          backgroundPosition: "5% 95%",
          backgroundSize: "200%",
        },
        "50%": {
          backgroundPosition: "95% 95%",
          backgroundSize: "200%",
        },
        "75%": {
          backgroundPosition: "5% 95%",
        },
        "100%": {
          backgroundPosition: "5% 5%",
        },
      },
})
)
export default function HoverShine(props) {
    const classes = useStyles(myTheme);
    return (
        <span className={classes.root}>
            {props.children}
        </span>
  );
}