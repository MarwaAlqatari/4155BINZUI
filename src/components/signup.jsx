import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    console.log("Form submitted:");
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);

    const response = await axios.post(
      "http://localhost:8080/users",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    console.log(response.data);

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
          <button
              onClick={this.onNavigateUsers}
              className="btn btn-primary"
            >
              Sign In
            </button>
          </div>

        </form>
      </div>
    );
  }
}



/*
import React, { Component } from "react";
import axios from "axios";
import { render } from "@testing-library/react";

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", this.state.email);
    formData.append("password", this.state.password);

    console.log("Form submitted:");
    console.log(`Email: ${this.state.email}`);
    console.log(`Password: ${this.state.password}`);

    const response = await axios.post(
      "http://localhost:8080/users",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    console.log(response.data);

    this.setState({
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-primary"
            />
          </div>

        </form>
      </div>
    );
  }
}
*/