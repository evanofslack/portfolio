import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import { ThemeProvider } from '@material-ui/core'
import myTheme from './components/themes/myTheme'


function App() {
  return (
    <ThemeProvider theme={myTheme}> 
    <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
export default App;
