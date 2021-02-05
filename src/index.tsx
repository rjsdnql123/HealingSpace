// src/index.js
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "./util/firebase";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
ReactDOM.render(<Root />, document.getElementById("root"));
