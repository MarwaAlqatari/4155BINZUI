import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" expands="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              B. I. N. Z.
            </NavLink>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/about">
              About
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/listings">
              Listings
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/signin">
              Sign In
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/signup">
              Sign Up
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/profile">
              Profile
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
