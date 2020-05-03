import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class SignIn extends Component {
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Sign Ip</h3>
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
