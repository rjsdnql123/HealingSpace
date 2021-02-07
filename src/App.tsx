// src/App.js
import React from "react";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import configureStore from "./store";
// import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "./util/styled";
import Login from "./components/ProFile/Login";
import Test from "./components/PsychologicalTest/Test";
import Result from "./components/TestResult/TestResult";
import humanLogo from "../public/humanLogo.png";
// import { Redirect } from "react-router-dom";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

const store = configureStore();
function App() {
  return (
    <Router>
      <Provider store={store}>
        <GlobalStyle />
        <img src={humanLogo} width={500} height={500}></img>
        <div>여기다가</div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/test" component={Test} />
          <Route path="/result" component={Result} />
        </Switch>
      </Provider>
    </Router>
  );
}
export default App;
