import React, { Component } from "react";
import { IPropsTodoItem } from "../interfaces";

export default class TodoItem extends Component<IPropsTodoItem> {
  setStyle = (completed: boolean) => {
    return {
      background: "#f4f4f4",
      padding: "1rem",
      borderBottom: "1px #ccc solid",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    const { toggleComplete } = this.props.actions;
    return (
      <div style={this.setStyle(completed)}>
        <p>
          <input type="checkbox" defaultChecked={completed} style={{ marginRight: "1rem" }} onChange={toggleComplete.bind(this, id)} />
          {title}
        </p>
      </div>
    );
  }
}
