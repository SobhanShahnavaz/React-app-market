import React, { Component } from "react";
import { ReactDOM } from "react";
import { useNavigate } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: "",
      password: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    if (this.state.admin == "admin" && this.state.password == "password") {
      const id = this.state.admin;
      const pass = this.state.password;
      return id, pass;
    } else {
      event.preventDefault();
      document.getElementById("Error").className = "";
    }
  }

  render() {
    const uri = document.location.href.toString();
    if (uri.indexOf("?") > 0) {
      const cleanUri = uri.substring(0, uri.indexOf("?"));
      window.history.replaceState({}, document.title, cleanUri);
    }
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <main className="form-signin mt-5 text-center">
          <form
            onSubmit={this.handleSubmit}
            action="http://localhost:3000/Admin"
            className="container w-25 mt-5"
          >
            <img
              className="mb-4"
              src="http://localhost:3000/bootstrap-icons-1.8.1/bootstrap.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>
            <span className="visually-hidden" id="Error">
              <p> use "admin" as id, and "password" as password.</p>
            </span>

            <div className="form-floating">
              <input
                type="text"
                name="admin"
                className="form-control"
                id="floatingInput"
                placeholder="Admin"
                value={this.state.admin}
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingInput">Administrator id</label>
            </div>
            <div className="form-floating mt-2">
              <input
                type="password"
                name="password"
                className="form-control"
                value={this.state.password}
                id="floatingPassword"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <label htmlFor="floatingPassword">Password</label>
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

export default Login;
