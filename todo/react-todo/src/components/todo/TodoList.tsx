import React, { Component } from "react";
import { IPropsTodoList } from "../interfaces";
import TodoItem from "./TodoItem";

export default class TodoList extends Component<IPropsTodoList> {
  render() {
    return (
      <div className="row">
        <div className="col mx-auto my-2">
          <h4 className="text-center" hidden={this.props.list.length !== 0}>
            There are no todo item to show...
          </h4>
          <ul className="list-group" hidden={this.props.list.length === 0}>
            {this.props.list.map((item) => (
              <TodoItem key={item._id} todo={item} actions={this.props.actions} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
