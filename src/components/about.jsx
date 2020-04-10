import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h1 align="middle"> &nbsp;</h1>
        <h1 align="middle">ABOUT US</h1>
        <h4 align="middle">
          {" "}
          <font color="black">
            Finding safe and afforable housing near campus can be challenging.
            So we created a place where UNCC students can sub-lease their next
            home.
          </font>
        </h4>
        <h1 align="middle"> &nbsp;</h1>
        <p>
          <p align="middle">Harika Jampani</p>
          <img
            src={require("./person.png")}
            alt="person1"
            width="200"
            height="200"
          />
          &nbsp; Harika loves computer science. She is one of our Frontend
          developers. She is also a part of our design team.
        </p>
        <p>
          <p align="middle">Marwa Alqatari</p>
          <img
            src={require("./person.png")}
            alt="person2"
            width="200"
            height="200"
          />
          &nbsp; Marwa loves software engineering and building programs. She is
          one of our Backend developers.
        </p>
        <p>
          <p align="middle">Radha Patel</p>
          <img
            src={require("./person.png")}
            alt="person2"
            width="200"
            height="200"
          />
          &nbsp; Radha loves data science. She is our database administrator.
          She also does our data visualization.
        </p>
        <p>
          <p align="middle">Cameron King</p>
          <img
            src={require("./person.png")}
            alt="person2"
            width="200"
            height="200"
          />
          &nbsp; Cameron loves programming and creating applications. He is one
          of our Frontend developers.
        </p>
        <p>
          <p align="middle">Samantha Mitchell</p>
          <img
            src={require("./person.png")}
            alt="person2"
            width="200"
            height="200"
          />
          &nbsp; Samantha loves coding and designing. She is one of our Front
          end developers and a part of our design team.
        </p>
        <p>
          <p align="middle">Gable Brown</p>
          <img
            src={require("./person.png")}
            alt="person2"
            width="200"
            height="200"
          />
          &nbsp; Gable loves software systems. He is one of our Backend
          developers and our team's scrum master.
        </p>
      </div>
    );
  }
}
