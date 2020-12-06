import React, { Component } from "react";
// To use routing functionalities
import { Link, NavLink } from "react-router-dom";
import "../index.css";

class Header extends Component {
  render() {
    return (
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <Link to="/" class="navbar-brand">
            bookshare
          </Link>
          {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="options navbar-nav ml-auto">
              <li class="nav-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/addbook">Donate Books</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/searchbook">Search by Book</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/searchauthor">Search by Author</NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/searchuser">Search by User</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
