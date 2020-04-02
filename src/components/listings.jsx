import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Listings extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Listings page</p>
        <Link to="/create" className="nav-link">
          Create Listing
        </Link>
      </div>
    );
  }
}
