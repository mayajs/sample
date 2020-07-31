import React, { Component, CSSProperties } from "react";
import { IPropsTodoItem } from "../interfaces";

export default class TodoItem extends Component<IPropsTodoItem> {
  setStyle = (completed: boolean) => {
    return {
      textDecoration: completed ? "line-through" : "none",
    };
  };

  render() {
    const { toggleComplete, deleteItem } = this.props.actions;
    const { _id, title, completed } = this.props.todo;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center" style={this.setStyle(completed)}>
        <input className="form-check-input mr-1" type="checkbox" defaultChecked={completed} onChange={toggleComplete.bind(this, _id)} />
        <span className="flex-grow-1 ml-1">{title}</span>
        <button className="btn btn-action btn-info badge mx-1">
          <span className="fas fa-edit"></span>
        </button>

        <button className="btn btn-action btn-danger badge mx-1" onClick={deleteItem.bind(this, _id)}>
          <span className="fas fa-trash"></span>
        </button>
      </li>
    );
  }
}
