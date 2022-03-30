import React, { Component } from 'react';
import NavBar from "./navbar";
import Breadcrumb from "./breadcrumb";
import AppCard from "./applicationPreview";
import Divider from "./Divider";
import Footer from "./footer";

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
        <NavBar />
        <Breadcrumb />
        <Divider/>
        <AppCard />
        <Divider/>
        <Footer/>
      </React.Fragment>
        );
    }
}
 
export default Home;