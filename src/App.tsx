// src/App.js
import React, { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyle } from "../util/styled";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../store/sagas/index";
import UserProFileList from "./components/ProFile/UserProFileList";
import Test from "./components/PsychologicalTest/Test";
import Result from "./components/TestResult/TestResult";
import humanLogo from "../public/humanLogo.png";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <img src={humanLogo} width={500} height={500}></img>
      <Route exact path="/" component={UserProFileList} />
      <Route path="/test" component={Test} />
      <Route path="/result" component={Result} />
    </Provider>
  );
}
export default App;