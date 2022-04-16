import React, { Component } from "react";

class Ulogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
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
    if (this.state.user == "user" && this.state.password == "password") {
      const id = this.state.user;
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
      <body class="text-center">
        <br />
        <br />
        <br />
        <main class="form-signin mt-5">
          <form
            onSubmit={this.handleSubmit}
            method=""
            action="http://localhost:3000/"
            className="container w-25 mt-5"
          >
            <img
              class="mb-4"
              src="http://localhost:3000/bootstrap-icons-1.8.1/bootstrap.svg"
              alt=""
              width="72"
              height="57"
            />
            <h1 class="h3 mb-3 fw-normal">Please Login</h1>
            <span className="visually-hidden" id="Error">
              <p> use "user" as id, and "password" as password.</p>
            </span>

            <div class="form-floating">
              <input
                type="text"
                name="user"
                className="form-control"
                id="floatingInput"
                placeholder="User"
                value={this.state.user}
                onChange={this.handleInputChange}
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
                value={this.state.password}
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
      </body>
    );
  }
}

export default Ulogin;
