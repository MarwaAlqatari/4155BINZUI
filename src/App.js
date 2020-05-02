import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
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
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container1">
          <h1 align="middle" style={{ backgroundColor: "dark" }}></h1>
          <Navigation />

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
