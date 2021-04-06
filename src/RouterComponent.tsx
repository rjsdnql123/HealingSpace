import React from "react";
import Login from "./components/LoginPage/LoginIndex";
import TestIndex from "./components/PsychologicalTest/TestIndex";
import Result from "./components/TestResult/TestResult";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/test" component={TestIndex} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </Router>
  );
}
export default RouterComponent;
