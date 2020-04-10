import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Edit from "./edit";
import MapListing from "./map";
import "../styles/leaflet.css";
import Geocode from "react-geocode";
import axios from "axios";

export default class Listings extends Component {
  state = {
    listings: []
  };
  componentDidMount() {
    Geocode.setApiKey("AIzaSyDJn7knufGIHSTgJiCnjPG0tej7nbv3Zrs");
    Geocode.setLanguage("en");
    (async () => {
      const lisstingDataResponse = await axios.get(
        "http://localhost:8080/listings"
      );
      const listingsBack = lisstingDataResponse.data;
      const listingsWithCordsPromises = listingsBack.map(async listing => {
        const response = await Geocode.fromAddress(listing.location);
        const { lat, lng } = response.results[0].geometry.location;
        return {
          ...listing,
          lat,
          lng
        };
      });
      const listingsWithCords = await Promise.all(listingsWithCordsPromises);
      //only way to update a state
      this.setState({
        listings: listingsWithCords
      });
    })();
  }

  render() {
    return (
      <div>
        <p>Welcome to Listings page</p>
        <Link to="/create" className="nav-link">
          Create Listing
        </Link>
        <div className="container-1 flexbox-item">
          <MapListing listings={this.state.listings} />
          <div className="container-2">
            <h2>Listings</h2>

            <ul>
              {this.state.listings.map(listing => (
                <li className="flexbox-item-2">
                  {listing.name} {listing.duration} {listing.rentPerMonth}{" "}
                  <Link to="/edit" className="nav-link">
                    Edit
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
