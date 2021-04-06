import React from "react";
import { Provider } from "react-redux";
import createStore from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalStyles } from "./common/styled";
import humanLogo from "../public/humanLogo.png";
import RouterComponent from "./RouterComponent";

const store = createStore();
function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <img src={humanLogo} width={500} height={500}></img>
      <RouterComponent />
    </Provider>
  );
}
export default App;
