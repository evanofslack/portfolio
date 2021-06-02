import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core'
import navTheme from './themes/navTheme'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
      marginLeft: "0vh",
      top: "0",
      zIndex: "100",
      background: "White",
      padding: "5vh",
  },
  button: {
      fontSize: '10vh',
      color: "#02012e",
      margin: "2vh",
      "&:hover": {
        color: "#ede477",
        textDecoration: "underline",
        textDecorationThickness: ".3vh",
      },
      "&.active": {
        color:'#ede477',
      },
  },
  container: {
      display: "flex",
  },
  icon: {
    fontSize: "4vh",
    backgroundColor: "transparent",
  },
}));

export default function Footer() {
    const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <ThemeProvider theme={navTheme}> 
        <div className={classes.root}>
            <div className={classes.container}>
                <IconButton 
                    href="https://github.com/evanofslack"
                    className={classes.button}
                    size = "Large"
                    disableFocusRipple
                    disableRipple
                    style={{ backgroundColor: "transparent" }}
                >
                    <GitHubIcon className={classes.icon}/>
                </IconButton>
                <IconButton
                    href="https://www.linkedin.com/in/evanslack/"
                    className={classes.button}
                    size = "Large"
                    disableFocusRipple
                    disableRipple
                    style={{ backgroundColor: "transparent" }}
                >
                    <LinkedInIcon className={classes.icon}/>
                </IconButton>
            </div>
        </div>
    </ThemeProvider>
    
  );
}
