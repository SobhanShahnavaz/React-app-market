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
class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/application" element={<Application/>} />
          <Route path="/ProjectGoal" element={<ProjectPurpose/>} />
        </Routes>
      </Router>
    );
  }
}

export default App;
