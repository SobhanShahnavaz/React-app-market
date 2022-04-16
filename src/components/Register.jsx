import React, { Component } from "react";

class Register extends Component {
  state = {};

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <main className="form-signin mt-5 text-center">
          <form
            onSubmit={this.handleSubmit}
            method=""
            action="http://localhost:3000/"
            className="container w-25 mt-5"
          >
            <img
              className="mb-4"
              src="http://localhost:3000/bootstrap-icons-1.8.1/bootstrap.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Register form</h1>
            <span className="visually-hidden" id="Error"></span>
            <div className="form-floating">
              <input
                type="text"
                name="firstName"
                className="form-control"
                id="floatingInput"
                placeholder="firstName"
              />
              <label htmlFor="floatingInput">first name</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="text"
                name="lastName"
                className="form-control"
                id="floatingInput"
                placeholder="lastName"
              />
              <label htmlFor="floatingInput">last name</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput"
                placeholder="email"
              />
              <label htmlFor="floatingInput ">Email</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="text"
                name="user"
                className="form-control"
                id="floatingInput"
                placeholder="User"
              />
              <label htmlFor="floatingInput">User id</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                id="floatingPassword"
                placeholder="confirmPassword"
              />
              <label htmlFor="floatingPassword">confirm password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary mt-2" type="submit">
              Login
            </button>
            <p className="mt-5 mb-3 text-muted">© Shahnavaz</p>
          </form>
        </main>
      </React.Fragment>
    );
  }
}

export default Register;
