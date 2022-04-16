import React, { Component } from "react";
import Divider from "./Divider";

class Users extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3 className="m-4">Users list</h3>
        <Divider />
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="http://localhost:3000/bootstrap-icons-1.8.1/person.svg"
            alt="twbs"
            width="50"
            height="50"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">User</h6>
              <p className="mb-0 opacity-75">ID912738712534612</p>
            </div>
            <small className="opacity-50 text-nowrap">view</small>
          </div>
        </a>
        <Divider />
      </React.Fragment>
    );
  }
}

export default Users;
