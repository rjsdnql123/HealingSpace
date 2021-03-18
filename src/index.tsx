// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { fire } from "./util/firebase";

fire();
ReactDOM.render(<App />, document.getElementById("root"));
