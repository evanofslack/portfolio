import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/core'
import navTheme from './themes/navTheme'
import MailIcon from '@material-ui/icons/Mail'
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "0vh",
    top: "0",
    zIndex: "100",
    background: "#0a1338",
    paddingBottom: "10px",
},
  button: {
    fontSize: '10vh',
    color: "white",
    margin: "1vh 2vh",
    "&:hover": {
      color: "#40c9a9",
      textDecoration: "underline",
      textDecorationThickness: ".3vh",
    },
    "&.active": {
      color:'#40c9a9',
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alightItems: "center",
  },
  icon: {
    fontSize: "4vh",
    backgroundColor: "transparent",
  },
  copyright: {
    color: "white",
    fontSize: ".8rem",
  }
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

                <IconButton
                  href="mailto:evan.slack@outlook.com"
                  className={classes.button}
                  size = "Large"
                  disableFocusRipple
                  disableRipple
                  style={{ backgroundColor: "transparent" }}
                 >
                  <MailIcon className={classes.icon}/>
                </IconButton>

            </div>
            <div className={classes.container}>
                <div className={classes.copyright}>
                    &copy; 2021 All rights reserved Evan Slack
                </div>
            </div>
        </div>
    </ThemeProvider>
    
  );
}
