import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Edit from "./edit";
import "../styles/leaflet.css";
import Geocode from "react-geocode";
import axios from "axios";
import { Button } from "react-bootstrap";

export default class Listings extends React.Component {


    constructor() {
        super();
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(event) {
        this.setState({ search: event.target.value });
    }

    state = {
        listings: [],
        search: ""
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
        let filteredListings = this.state.listings.filter(listing => {
            return (
                listing.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
                -1
            );
        });

        return (
            <div>
                <div className="container-1 flexbox-item">

                <div className="container-2">
                    <h2>Profile</h2>
                    
                    <table className="table">
                        <tbody>
                            <img src="https://img2.pngio.com/united-states-avatar-organization-information-png-512x512px-user-avatar-png-820_512.jpg" width="256px" height="256px"></img>
                            <h3>Email: </h3>
                            <h3>Phone: </h3>
                        </tbody>
                    </table>
                    </div>

                    <div className="container-2">
                        <h2>My Listings</h2>
                        <table className="table">
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Rent/Month</th>
                                    <th scope="col">Actions</th>
                                </tr>

                            <tbody>
                                {filteredListings.map(listing => (
                                    <tr key={listing.id}>
                                        <th scope="row">{listing.name}</th>
                                        <td>{listing.duration}</td>
                                        <td>$ {listing.rentPerMonth}</td>
                                        <td>
                                            <Link
                                                to={`/listings/${listing.id}/edit`}
                                                className="nav-link"
                                            >
                                                <button type="button">Edit</button>
                                            </Link>
                                            <Link to={`/listings/${listing.id}`} className="nav-link">
                                                <button type="button">See More</button>
                                            </Link>

                                            <Button
                                                style={{ margin: 15 }}
                                                onClick={() => this.deleteListing(listing.id)}
                                            >
                                                Delete
                      </Button>
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
