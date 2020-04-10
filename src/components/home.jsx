import React, { Component } from "react";
import { render } from "@testing-library/react";
import night from "./night.jpg";
export default class Home extends Component {
  render() {
    return (
      <div>
        <h3 align="center">WELCOME TO BINZ!</h3>
        <img
          src={require("./night.jpg")}
          alt="night"
          width="1200"
          height="400"
        />
        <h1>&nbsp;</h1>
        <p>
          "I was able to find the perfect location and apartment to sublease
          with ease. Thanks BINZ!" - Cathy Lynn
        </p>
        <p>
          "I love this website! It has changed the way I sublease my apartment
          and I will never stop using it." - Jimmy John
        </p>
      </div>
    );
  }
}
