import React, { Component, CSSProperties } from "react";
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

  btnStyle: CSSProperties = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  render() {
    const { _id, title, completed } = this.props.todo;
    const { toggleComplete, deleteItem } = this.props.actions;
    return (
      <div style={this.setStyle(completed)}>
        <p>
          <input type="checkbox" defaultChecked={completed} style={{ marginRight: "1rem" }} onChange={toggleComplete.bind(this, _id)} />
          {title}
          <button style={this.btnStyle} onClick={deleteItem.bind(this, _id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}
