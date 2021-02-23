// src/index.js
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./util/firebase";
import "core-js/stable";
import "regenerator-runtime/runtime";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
ReactDOM.render(<App />, document.getElementById("root"));
