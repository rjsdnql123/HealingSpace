// src/index.js
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { fire } from "./util/firebase";
fire();
ReactDOM.render(<App />, document.getElementById("root"));
