import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Home from "./Components/home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Home /> */}
  </React.StrictMode>,
  rootElement
);
