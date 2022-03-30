import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  state = {};
  openNav (){
    let hidden = document.getElementById("navbarSupportedContent").className;
    if (hidden === "collapse navbar-collapse"){
      hidden = "navbar-collapse";
      document.getElementById("navbarSupportedContent").className = hidden;
    }
    else{
      hidden = "collapse navbar-collapse";
      document.getElementById("navbarSupportedContent").className = hidden;
    }
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand m-2" href="http://localhost:3000/">
            <img
              src="http://localhost:3000/bootstrap-icons-1.8.1/cart3.svg"
              alt="twbs"
              width="32"
              height="32"
              className="flex-shrink-0"
            />
            Play Market
          </a>
          <button 
          onClick={this.openNav}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link bg-info active"
                  aria-current="page"
                  href="http://localhost:3000/"
                >
                  Games
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">
                  Apps
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/ProjectGoal">
                  project purpose
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
