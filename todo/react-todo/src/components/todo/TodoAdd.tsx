import React, { Component, ChangeEvent, FormEvent } from "react";
import { IPropsTodoAdd } from "../interfaces";

export default class TodoAdd extends Component<IPropsTodoAdd> {
  state = {
    title: "",
  };

  onChange = (event: ChangeEvent<HTMLInputElement>) => this.setState({ [event.target.name]: event.target.value });

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };

  btnStyle = { flex: "2", backgroundColor: "#333", color: "white", cursor: "pointer" };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
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
