import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './components/themes/myTheme'
import "./App.css";


function App() {
  return (
    <ThemeProvider theme={myTheme}> 
    <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
