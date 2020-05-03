import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../styles/leaflet.css";
import Geocode from "react-geocode";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Image } from "react-bootstrap";

export default class Profile extends React.Component {




    render() {


        return (
            <div>
                <div className="container-1 flexbox-item">

                    <div className="container-2">
                        <h2>Profile</h2>

                        <table className="table">
                            <tbody>
                                <Image
                                    src={require("./Norm.png")}
                                    width="256px"
                                    height="256px"
                                ></Image>
                                <h3>Email: normtheniner@uncc.edu</h3>
                                <h3>Name: Norm Niner</h3>
                                <h3>Phone: (494) 949 - 4949</h3>
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

                                <tr >
                                    <th scope="row"> 3 room Apartment</th>
                                    <td>2 months</td>
                                    <td>$400/month</td>
                                    <td>
                                        <Link
                                            to={`/listings/edit`}
                                            className="nav-link"
                                        >
                                            <button type="button">Edit</button>
                                        </Link>
                                        <Link to={`/listings/`} className="nav-link">
                                            <button type="button">See More</button>
                                        </Link>

                                        <Button
                                            style={{ margin: 15 }}
                                        >
                                            Delete
                      </Button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
