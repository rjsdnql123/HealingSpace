import React from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyles } from "./common/styled";
import humanLogo from "../public/humanLogo.png";
import LoginView from "./feature/loginForm/LoginView";
import PsychologicalView from "./feature/Psychological/PsychologicalView";
import TestView from "./feature/testResult/TestView";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

const store = createStore();
function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <img src={humanLogo} width={500} height={500}></img>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginView} />
          <Route exact path="/test" component={PsychologicalView} />
          <Route exact path="/result" component={TestView} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
