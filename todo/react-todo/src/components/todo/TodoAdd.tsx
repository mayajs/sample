import React, { Component, ChangeEvent } from "react";

export default class TodoAdd extends Component {
  state = {
    title: "",
  };

  onChange = (event: ChangeEvent<HTMLInputElement>) => this.setState({ [event.target.name]: event.target.value });

  btnStyle = { flex: "2", backgroundColor: "#333", color: "white", cursor: "pointer" };

  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "6", padding: ".5rem" }}
          placeholder="Enter Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" className="btn" style={this.btnStyle} />
      </form>
    );
  }
}
