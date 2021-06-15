import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Navbar from "./Navbar";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './themes/myTheme'

const useStyles = makeStyles((theme) => ({
  isDisplayed: {
    [theme.breakpoints.up('sm')]: {
      display: "none",
    },
  }
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
      <div className={classes.isDisplayed}>
        <React.Fragment>
          <Button onClick={handleDrawerOpen}>Menu</Button>
          <Drawer
            anchor= "right"
            open={open}
            onClose={handleDrawerClose}
          >
            <Navbar/>
          </Drawer>
        </React.Fragment>
     </div>

    </ThemeProvider>

    
  );
}
