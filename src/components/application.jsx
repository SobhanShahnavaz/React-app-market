import React, { Component } from "react";
import { ReactDOM } from "react";
import NavBar from "./navbar";
import Breadcrumb from "./breadcrumb";
import Details from "./appDetails";
import Footer from "./footer";
import Divider from "./Divider";

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Breadcrumb />
        <Divider />
        <Details />

        <Divider />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Application;
