import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Photography from "./components/Photography";
import Spotify from "./components/projects/Spotify";
import Toothbrush from "./components/projects/Toothbrush";
import Macropad from "./components/projects/Macropad";
import Splitflap from "./components/projects/Splitflap";
import DisplayFrame from "./components/projects/DisplayFrame";
import FlowBench from "./components/projects/FlowBench";
import GlaucomaMonitor from "./components/projects/GlaucomaMonitor";
import Inchworm from "./components/projects/Inchworm";
import Lermon from "./components/projects/Lermon";
import Portfolio from "./components/projects/Portfolio";
import WritingRobot from "./components/projects/WritingRobot";
import { ThemeProvider } from "@material-ui/core";
import myTheme from "./components/themes/myTheme";
import { JssProvider } from "react-jss";
import "./App.css";

function App() {
    return (
        <JssProvider>
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
                        <Route exact path="/projects/inkdisplay" component={DisplayFrame} />
                        <Route exact path="/projects/flowbench" component={FlowBench} />
                        <Route exact path="/projects/glaucoma" component={GlaucomaMonitor} />
                        <Route exact path="/projects/inchworm" component={Inchworm} />
                        <Route exact path="/projects/lermon" component={Lermon} />
                        <Route exact path="/projects/portfolio" component={Portfolio} />
                        <Route exact path="/projects/writingrobot" component={WritingRobot} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </JssProvider>
    );
}
export default App;
