import React from "react";
import Homebg from "../images/homebg.jpg";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import logo from "../images/noun_Cricket_2369453.svg";
import Register from "./register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: " ", password: " " };
  }
  handlechange = (event) => {
    let id = event.target.name;
    this.setState({ [id]: event.target.value });
  };
  submithandler = (event) => {
    alert(
      "A name was submitted: " + this.state.username + " " + this.state.password
    );
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <div
          className="login"
          style={{
            backgroundImage: `url(${Homebg})`,

            height: "800px",
            opacity: 0.8
          }}
        >
          <div class="Jumbotron">
            <img src={logo} />
            <form onSubmit={this.submithandler}>
              <div class="row g-3 align-items-center">
                <label for="inputPassword6" class="col-form-label">
                  Username
                </label>

                <input
                  type="text"
                  id="inputPassword6"
                  class="form-control"
                  name="username"
                  value={this.state.username}
                  onChange={this.handlechange}
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <div class="row g-3 align-items-center">
                <label for="inputPassword6" class="col-form-label">
                  Password
                </label>

                <input
                  type="password"
                  id="inputPassword6"
                  class="form-control"
                  name="password"
                  onChange={this.handlechange}
                  aria-describedby="passwordHelpInline"
                />
              </div>
              <br />
              <button
                type="submit"
                class="btn btn-dark btn-block"
                value="Submit"
              >
                Submit
              </button>
            </form>
            <br />

            <button type="submit" class="btn btn-dark btn-block">
              <Link
                to={{
                  pathname: "/Register",
                  state: { prev: false }
                }}
                className="linkto"
              >
                {/* {" "} */}
                Register
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default home;
