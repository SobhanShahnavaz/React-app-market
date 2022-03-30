import React, { Component } from "react";

class AppCard extends Component {
  state = {};
  render() {
    return (
      <div className="card container" style={{ width: "12rem" }}>
        <img src="http://localhost:3000/gun.jpg" className="card-img-top " alt="..." />
        <div className="card-body">
          <h5 className="card-title">Gun game</h5>
          <p className="card-text">
            Action
          </p>
          <a href="/application" className="btn btn-success">
            view & download
          </a>
        </div>
      </div>
    );
  }
}

export default AppCard;
