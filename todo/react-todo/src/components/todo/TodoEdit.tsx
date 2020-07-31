import React, { Component, ChangeEvent, FormEvent } from "react";
import { IPropsTodoEdit } from "../interfaces";

export default class TodoAdd extends Component<IPropsTodoEdit> {
  state = {
    title: this.props.todo.title,
  };

  onChange = (event: ChangeEvent<HTMLInputElement>) => this.setState({ [event.target.name]: event.target.value });

  onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { _id, completed } = this.props.todo;
    this.props.updateItem({ title: this.state.title, _id, completed });
    this.setState({ title: "" });
  };

  btnStyle = { flex: "2", backgroundColor: "#333", color: "white", cursor: "pointer" };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <input className="form-control" type="text" name="title" placeholder="Enter TODO here..." value={this.state.title} onChange={this.onChange} />
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    );
  }
}
