import React, { Component } from "react";

class Divider extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          height: "2.5rem",
          backgroundColor: "rgba(0,0,0,.1)",
          border: "solid rgba(0, 0, 0, .15)",
          borderWidth: "1px 0",
          boxShadow:
            "inset 0 0.5em 1.5em rgb(0 0 0 / 10%), inset 0 0.125em 0.5em rgb(0 0 0 / 15%)",
        }}
      ></div>
    );
  }
}

export default Divider;
