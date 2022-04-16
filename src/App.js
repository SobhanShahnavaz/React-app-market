import React, { Component } from "react";
import { ReactDOM } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Application from "./components/application";
import ProjectPurpose from "./components/projectPurpose";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Ulogin from "./components/Ulogin";
import Register from "./components/Register";
import Settings from "./components/Settings";
import AppList from "./components/AppList";
import Users from "./components/Users";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/application" element={<Application />} />
          <Route path="/ProjectGoal" element={<ProjectPurpose />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Ulogin" element={<Ulogin />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/AppList" element={<AppList />} />
          <Route path="/Users" element={<Users />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
