import React from "react";
import LoginView from "./feature/loginForm/LoginView";
import TestIndex from "./components/PsychologicalTest/TestIndex";
import Result from "./components/TestResult/TestResult";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route exact path="/test" component={TestIndex} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </Router>
  );
}
export default RouterComponent;
