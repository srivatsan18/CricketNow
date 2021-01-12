import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Select, { components } from "react-select";
import { ReactComponent as af } from "../images/af.svg";
import { ReactComponent as nz } from "../images/nz.svg";
import { ReactComponent as ind } from "../images/in.svg";
import { ReactComponent as sa } from "../images/sa.svg";
import { ReactComponent as sl } from "../images/sl.svg";
import { ReactComponent as pk } from "../images/pk.svg";
import { ReactComponent as bd } from "../images/bd.svg";

const Options = [
  { value: "Afghanistan", label: "Afghanistan", icon: <af /> },
  { value: "New Zealand", label: "New Zealand", icon: <nz /> },
  { value: "India", label: "India", icon: <ind /> },
  { value: "South Africa", label: "South Africa", icon: <sa /> },
  { value: "Sri Lanka", label: "Sri Lanka", icon: <sl /> },
  { value: "Pakistan", label: "Pakistan", icon: <pk /> },
  { value: "Bangladesh", label: "Bangladesh", icon: <bd /> }
];
const { Option } = components;
const IconOption = (props) => (
  <Option {...props}>
    <img
      src={props.data.icon}
      style={{ width: 50 }}
      // alt={props.data.label}
    />
    {props.data.label}
  </Option>
);

class register extends React.Component {
  constructor(props) {
    super(props);
    // this.state={ australia :
    //   <img src="https://img.icons8.com/color/48/000000/australia-circular.png" />,
    // india : <img src="https://img.icons8.com/doodle/48/000000/india.png" />,
    // afghanistan :
    // <img src="https://img.icons8.com/emoji/48/000000/afghanistan-emoji.png" />,
    // england :<img src= "https://img.icons8.com/emoji/48/000000/england-emoji.png" />,
    // newzealand :
    // <img src= "https://img.icons8.com/emoji/48/000000/new-zealand-emoji.png" />,
    // srilanka : <img src ="https://img.icons8.com/color/50/000000/sri-lanka.png" />,
    // southafrica :
    // <img src= "https://img.icons8.com/emoji/48/000000/south-africa-emoji.png" />,
    // }
  }
  render() {
    return (
      <div className="reg">
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1">User Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Username"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Minimum 8 Characters"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Confirm Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Confirm your Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Your Favorite Team</label>
            <div className="opt-text">
              <Select
                defaultValue={Options[0]}
                options={Options}
                components={{ Option: IconOption }}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-dark btn-block">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}
export default register;
