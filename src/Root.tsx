import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

function Root() {
  console.log("지나가지?");
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
export default Root;
