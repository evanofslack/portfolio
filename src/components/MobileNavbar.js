import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from '@material-ui/core/IconButton';
import Button from "@material-ui/core/Button";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from  "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    display: "flex",
    justifyContent: "flex-end",
  },

  menu: {
    fontFamily: 'karla',
    fontSize: "calc(16px)",
    color:'#0a1338',
    margin: "1vw",
    "&:hover": {
      color: "#ede477",
      textDecoration: "underline",
      textDecorationThickness: ".3vh",
    },
    "&.active": {
      color: "#40c9a9", 
      
    },
},

container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    margin: "4vh 1vh",
    zIndex: "1",
    //background: "#02012e",
    background: "white",
},
}));

export default function MobileNavbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <div className={classes.menuButton}>
          <IconButton
              onClick={handleDrawerOpen}
              
              style={{ color: "white" }}
          >
              <MenuIcon fontSize = "large" />
          </IconButton>

          <Drawer
            anchor= "right"
            open={open}
            onClose={handleDrawerClose}
          >
            <Toolbar >
                <div className={classes.container}>
                    <Button
                        disableRipple
                        className={classes.menu}
                        component={NavLink}
                        to="/" exact
                    >
                        Home
                    </Button>

                    <Button
                        disableRipple
                        className={classes.menu}
                        component={NavLink}
                        to="/projects" exact
                    >
                        Projects
                    </Button>

                    <Button
                        disableRipple
                        className={classes.menu}
                        component={NavLink}
                        to="/about" exact
                    >
                        About
                    </Button>

                    <Button
                        disableRipple
                        className={classes.menu}
                        component={NavLink}
                        to="/photography" exact
                    >
                        Photography
                    </Button>
                    
                </div>
            </Toolbar>
          </Drawer>
     </div>

    </ThemeProvider>

    
  );
}
