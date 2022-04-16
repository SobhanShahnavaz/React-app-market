import React, { Component } from "react";
import Divider from "./Divider";

class Admin extends Component {
  state = {};

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const uri = document.location.href.toString();
    if (uri.indexOf("?") > 0) {
      const cleanUri = uri.substring(0, uri.indexOf("?"));
      window.history.replaceState({}, document.title, cleanUri);
    }
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand m-2" href="http://localhost:3000/Admin">
              <img
                src="http://localhost:3000/bootstrap-icons-1.8.1/person-rolodex.svg"
                alt="twbs"
                width="32"
                height="32"
                className="flex-shrink-0"
              />
              administrator Panel
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a className="nav-link " href="http://localhost:3000/Login">
                    Log out
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="http://localhost:3000/AppList">
                    App list
                  </a>
                </li>
                <li className="nav-item ">
                  <a className="nav-link " href="http://localhost:3000/Users">
                    Users
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Divider />
        <div className="col-md-7 col-lg-8 text-center">
          <h4 className="mb-3 mt-3">Add application</h4>
          <form
            onSubmit={this.handleSubmit}
            className="needs-validation"
            novalidate=""
          >
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="title"
                  value=""
                  required=""
                />
                <div className="invalid-feedback">Valid title is required.</div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="link" className="form-label">
                  Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  placeholder="link"
                  value=""
                  required=""
                />
                <div className="invalid-feedback">Valid link is required.</div>
              </div>
              <div className="col-md-12">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select className="form-select" id="category" required="">
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid category.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="version" className="form-label">
                  Version
                </label>
                <div className="input-group has-validation">
                  <input
                    type="text"
                    className="form-control"
                    id="version"
                    placeholder="version"
                    required=""
                  />
                  <div className="invalid-feedback"> Version is required.</div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="appId" className="form-label">
                  id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="appId"
                  placeholder="number"
                />
                <div className="invalid-feedback">
                  Please enter a valid appId for counting downloads and rates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  App path
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="/dirctory"
                  required=""
                />
                <div className="invalid-feedback">
                  Please enter app path in directory.
                </div>
              </div>
              <div className="input-group">
                <span className="input-group-text">App description</span>
                <textarea
                  className="form-control"
                  aria-label="App description"
                ></textarea>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-lg mb-3" type="submit">
              Insert data
            </button>
          </form>
        </div>
        <Divider />
      </React.Fragment>
    );
  }
}

export default Admin;
