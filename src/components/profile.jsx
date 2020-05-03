import React, { Component } from "react";
import { render } from "@testing-library/react";

export default class profile extends Component {
  render() {
    return (
      <div>
        <h1 align="middle">PROFILE</h1>
        <p align="left">Name:</p>
        <p align="left">Email:</p>
      </div>
    );
  }
}
