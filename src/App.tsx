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
    <Provider store={store}>
      <img src={humanLogo} width={500} height={500}></img>
      <div>여기다가</div>
      <Router basename="/example">
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/result" component={Result} />
          </Switch>
        </div>
      </Router>
      <GlobalStyle />
    </Provider>
  );
}
export default App;
