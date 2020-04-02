import React, { Component } from "react";
import axios from "axios";
import { createCipher } from "crypto";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeRent = this.onChangeRent.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangePets = this.onChangePets.bind(this);
    this.onChangeFurnished = this.onChangeFurnished.bind(this);
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
    this.onChangeEndDate = this.onChangeEndDate.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: "",
      phone: 0,
      email: "",
      duration: "",
      rentPerMonth: 0,
      location: "",
      pets: false,
      furnished: false,
      startDate: "",
      endDate: "",
      comments: "",
      file: "",
      fileName: ""
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    });
  }
  onChangeRent(e) {
    this.setState({
      rent: e.target.value
    });
  }
  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    });
  }
  onChangePets(e) {
    this.setState({
      pets: e.target.value
    });
  }
  onChangeFurnished(e) {
    this.setState({
      furnished: e.target.value
    });
  }
  onChangeStartDate(e) {
    this.setState({
      startDate: e.target.value
    });
  }
  onChangeEndDate(e) {
    this.setState({
      endDate: e.target.value
    });
  }
  onChangeComments(e) {
    this.setState({
      comments: e.target.value
    });
  }
  onChangeFile(e) {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("phone", this.state.phone);
    formData.append("email", this.state.email);
    formData.append("duration", this.state.duration);
    formData.append("rentPerMonth", this.state.rentPerMonth);
    formData.append("location", this.state.location);
    formData.append("pets", this.state.pets === "Yes" ? true : false);
    formData.append("furnished", this.state.furnished === "Yes" ? true : false);
    formData.append("startDate", this.state.startDate);
    formData.append("endDate", this.state.endDate);
    formData.append("comments", this.state.comments);
    formData.append("listingImage", this.state.file);

    console.log("Form submitted:");
    console.log(`Name: ${this.state.name}`);
    console.log(`Phone: ${this.state.phone}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Duration: ${this.state.duration}`);
    console.log(`Rent Per Month: ${this.state.rent}`);
    console.log(`Location: ${this.state.ocation}`);
    console.log(`Peys: ${this.state.pets}`);
    console.log(`Furnished: ${this.state.furnished}`);
    console.log(`Start Date: ${this.state.tartdate}`);
    console.log(`End Date: ${this.state.enddate}`);
    console.log(`Comments: ${this.state.comments}`);
    console.log(`File: ${this.state.file}`);
    console.log(`File Name: ${this.state.fileName}`);

    const response = await axios.post(
      "http://localhost:8080/listings",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    // const newListing = {
    //   name: this.state.name,
    //   phone: this.state.phone,
    //   email: this.state.email,
    //   duration: this.state.duration,
    //   rentPerMonth: this.state.rentPerMonth,
    //   location: this.state.location,
    //   pets: this.state.pets,
    //   furnished: this.state.furnished,
    //   startDate: this.state.startDate,
    //   endDate: this.state.endDate,
    //   comments: this.state.comments,
    //   file: this.state.file,
    //   fileName: this.state.fileName
    // };

    // const response = await axios.post(
    //   "http://localhost:8080/listings",
    //   newListing
    // );

    console.log(response.data);

    this.setState({
      name: "",
      phone: 0,
      email: "",
      duration: "",
      rentPerMonth: 0,
      location: "",
      pets: false,
      furnished: false,
      startDate: "",
      endDate: "",
      comments: "",
      file: "",
      fileName: ""
    });
  }
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Listing</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>

          <div className="form-group">
            <label>Phone: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </div>

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
            <label>Duration: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>

          <div className="form-group">
            <label>Rent Per Month: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.rent}
              onChange={this.onChangeRent}
            />
          </div>

          <div className="form-group">
            <label>Location: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
            />
          </div>

          <div className="form-group">
            <label>Pets: </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="petsOptions"
                id="noPets"
                value="No"
                checked={this.state.pets == "No"}
                onChange={this.onChangePets}
              />
              <label className="form-checl-label">No Pets</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="petsOptions"
                id="yesPets"
                value="Yes"
                checked={this.state.pets == "Yes"}
                onChange={this.onChangePets}
              />
              <label className="form-checl-label">Can Have Pets</label>
            </div>
          </div>

          <div className="form-group">
            <label>Furnished: </label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="furnishedOptions"
                id="Furnished"
                value="Yes"
                checked={this.state.furnished == "Yes"}
                onChange={this.onChangeFurnished}
              />
              <label className="form-checl-label">Furnished</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="furnishedOptions"
                id="NotFurnished"
                value="No"
                checked={this.state.furnished == "No"}
                onChange={this.onChangeFurnished}
              />
              <label className="form-checl-label">Not Furnished</label>
            </div>
          </div>

          <div className="form-group">
            <label>Start Date: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.startdate}
              onChange={this.onChangeStartDate}
            />
          </div>

          <div className="form-group">
            <label>End Date: </label>
            <input
              type="date"
              className="form-control"
              value={this.state.enddate}
              onChange={this.onChangeEndDate}
            />
          </div>

          <div className="form-group">
            <label>Comments: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.comments}
              onChange={this.onChangeComments}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlFile1">Pictures</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
              onChange={this.onChangeFile}
            ></input>
          </div>

          <div className="form-group">
            <input
              type="submit"
              calue="Create Listing"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
