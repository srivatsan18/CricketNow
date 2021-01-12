import React from "react";
class register extends React.Component {
  constructor(props) {
    super(props);
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
        </form>
      </div>
    );
  }
}
export default register;
