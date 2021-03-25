import React from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./components/common/styled";
import Login from "./components/LoginPage/LoginIndex";
import TestIndex from "./components/PsychologicalTest/TestIndex";
import Result from "./components/TestResult/TestResult";
import humanLogo from "../public/humanLogo.png";
import { Switch, HashRouter as Router, Route } from "react-router-dom";

const store = createStore();
function App() {
  return (
    <Provider store={store}>
      <img src={humanLogo} width={500} height={500}></img>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/test" component={TestIndex} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
      <GlobalStyle />
    </Provider>
  );
}
export default App;
