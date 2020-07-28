import React, { Component } from "react";
import { IPropsTodoList } from "../interfaces";
import TodoItem from "./TodoItem";

export default class TodoList extends Component<IPropsTodoList> {
  render() {
    return this.props.list.map((item) => <TodoItem key={item.id} todo={item} />);
  }
}
