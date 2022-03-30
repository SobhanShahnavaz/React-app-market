import React, { Component } from "react";

class Breadcrumb extends Component {
  state = {};
  render() {
    return (
      <nav className="m-4 container" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
        </ol>
      </nav>
    );
  }
}

export default Breadcrumb;
