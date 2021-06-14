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
import Photography from "./components/Photography";
import Spotify from "./components/projects/Spotify";
import Toothbrush from "./components/projects/Toothbrush";
import Macropad from "./components/projects/Macropad";
import Splitflap from "./components/projects/Splitflap";
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
          <Route exact path="/photography" component={Photography} />
          <Route exact path="/projects/spotify" component={Spotify} />
          <Route exact path="/projects/toothbrush" component={Toothbrush} />
          <Route exact path="/projects/macropad" component={Macropad} />
          <Route exact path="/projects/splitflap" component={Splitflap} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
