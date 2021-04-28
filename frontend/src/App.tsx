import React from "react";

import { Column } from "./components/Column";
import { Card } from "./components/Card";
import "./App.css";
import { AppContainer } from "./styles";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Home";
import { About } from "./About";
import { NoMatch } from "./NoMatch";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar />
      </Router>
    </React.Fragment>
  );

  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route component={NoMatch} />
  </Switch>;
}

export default App;
