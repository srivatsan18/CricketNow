import React from "react";
import "./styles.css";
import Home from "./Components/Home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/Home/register";
import Homebg from "./Components/images/homebg.jpg";
export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={Register} />
        </div>
        {/* <Home /> */}
      </div>
    </Router>
  );
}
