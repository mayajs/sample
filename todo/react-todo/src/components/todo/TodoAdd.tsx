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
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <input className="form-control" type="text" name="title" placeholder="Enter TODO here..." value={this.state.title} onChange={this.onChange} />
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </form>
    );
  }
}
