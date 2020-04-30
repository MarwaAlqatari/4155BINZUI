import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Edit from "./edit";
import MapListing from "./map";
import "../styles/leaflet.css";
import Geocode from "react-geocode";
import axios from "axios";

//const Many = require("extends-classes");

export default class Listings extends React.Component {
  constructor() {
    super();
    this.star = { search: "" };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
    //console.log(event.target.value);
  }

  state = {
    listings: [],
  };

  componentDidMount() {
    Geocode.setApiKey("AIzaSyDJn7knufGIHSTgJiCnjPG0tej7nbv3Zrs");
    Geocode.setLanguage("en");
    (async () => {
      const lisstingDataResponse = await axios.get(
        "http://localhost:8080/listings"
      );
      const listingsBack = lisstingDataResponse.data;
      const listingsWithCordsPromises = listingsBack.map(async (listing) => {
        const response = await Geocode.fromAddress(listing.location);
        const { lat, lng } = response.results[0].geometry.location;
        return {
          ...listing,
          lat,
          lng,
        };
      });
      const listingsWithCords = await Promise.all(listingsWithCordsPromises);
      //only way to update a state
      this.setState({
        listings: listingsWithCords,
      });
    })();
  }

  deleteListing(id) {
    axios
      .delete(`http://localhost:8080/listings/${id}`)
      .then((res) => {
        console.log("Listing successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      listings: this.state.listings.filter((listing) => listing.id !== id),
    });
  }

  render() {
    let filteredListings = this.state.listings.filter((listing) => {
      return listing.name.indexOf(this.state.search) !== -1;
    });
    return (
      <div>
        <label htmlFor="filter">Search: &nbsp;</label>
        <input
          type="text"
          //value={this.star.search}
          onChange={this.updateSearch}
        />
        <p>Welcome to Listings page</p>
        <Link to="/listings/create" className="nav-link">
          Create Listing
        </Link>
        <div className="container-1 flexbox-item">
          <MapListing listings={this.state.listings} />
          <div className="container-2">
            <h2>Listings</h2>
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Rent/Month</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>

              <tbody>
                <div>
                  <ul>
                    {filteredListings.map((listing) => {
                      return <listings listings={listing} key={listing.name} />;
                    })}
                  </ul>
                </div>

                {filteredListings.map((listing) => (
                  <tr>
                    <th scope="row">{listing.name}</th>
                    <td>{listing.duration}</td>
                    <td>$ {listing.rentPerMonth}</td>
                    <td>
                      <Link
                        to={`/listings/${listing.id}/edit`}
                        className="nav-link"
                      >
                        Edit
                      </Link>

                      <button onClick={() => this.deleteListing(listing.id)}>
                        Delete
                      </button>
                      <Link to={`/listings/${listing.id}`} className="nav-link">
                        See More
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
