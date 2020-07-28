import React, { Component } from "react";

export default class TodoAdd extends Component {
  render() {
    return (
      <form>
        <input type="submit" value="Submit" className="btn" style={{ flex: "1" }} />
      </form>
    );
  }
}
