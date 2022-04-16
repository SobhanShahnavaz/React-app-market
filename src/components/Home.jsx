import React, { Component } from "react";
import NavBar from "./navbar";
import Breadcrumb from "./breadcrumb";
import AppCard from "./applicationPreview";
import Divider from "./Divider";
import Footer from "./footer";

class Home extends Component {
  state = {};
  render() {
    const uri = document.location.href.toString();
    if (uri.indexOf("?") > 0) {
      const cleanUri = uri.substring(0, uri.indexOf("?"));
      window.history.replaceState({}, document.title, cleanUri);
    }
    return (
      <React.Fragment>
        <NavBar />
        <Breadcrumb />
        <Divider />
        <AppCard />
        <Divider />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
