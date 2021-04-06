import React from "react";
import LoginView from "./feature/loginForm/LoginView";
import PsychologicalView from "./feature/Psychological/PsychologicalView";
import Result from "./components/TestResult/TestResult";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

function RouterComponent() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginView} />
        <Route exact path="/test" component={PsychologicalView} />
        <Route exact path="/result" component={Result} />
      </Switch>
    </Router>
  );
}
export default RouterComponent;
