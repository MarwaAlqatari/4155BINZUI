import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import About from "./components/about";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Listings from "./components/listings";
import Create from "./components/create";
import Edit from "./components/edit";
import Listing from "./components/listing";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a
              className="navbar-brand"
              href="https://codingthesmartway.com"
              target="_blank"
            >
              <img
                src={logo}
                width="200"
                height="200"
                alt="CodingTheSmartWay.com"
              />
            </a>
            <Link to="/" className="navbar-brand">
              BINZ - Let Us Lease The Way!
            </Link>
            <div className="collapse nav-collapse show">
              <ul className="navbar-av mr-auto">
                <li className="navbar-item">
                  <NavLink
                    to="/"
                    exact
                    activeStyle={{ color: "blue" }}
                    className="nav-NavLink"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    to="/about"
                    exact
                    activeStyle={{ color: "blue" }}
                    className="nav-NavLink"
                  >
                    About
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    to="/signin"
                    exact
                    activeStyle={{ color: "blue" }}
                    className="nav-NavLink"
                  >
                    Sign In
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    to="/signup"
                    exact
                    activeStyle={{ color: "blue" }}
                    className="nav-NavLink"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li className="navbar-item">
                  <NavLink
                    to="/listings"
                    exact
                    activeStyle={{ color: "blue" }}
                    className="nav-NavLink"
                  >
                    Listings
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <h2></h2>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/listings" exact component={Listings} />
            <Route path="/listings/create" exact component={Create} />
            <Route path="/listings/:id" exact component={Listing} />
            <Route path="/listings/:id/edit" exact component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
