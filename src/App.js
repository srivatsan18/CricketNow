import React from "react";
import "./styles.css";
import Home from "./Components/home";
import Homebg from "./Components/images/homebg.jpg";
export default function App() {
  return (
    <div className="App">
      <div>
        <home />
      </div>
      <Home />
      <img src={Homebg} />
    </div>
  );
}
