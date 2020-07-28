import React, { Component } from "react";
import Header from "./components/utility/Header";
import TodoList from "./components/todo/TodoList";
import { ITodo } from "./components/interfaces";
import "./App.css";

class App extends Component<{}, { list: ITodo[] }> {
  state = {
    list: [
      {
        id: "1",
        title: "test",
        completed: false,
      },
    ],
  };

  // Toggle Complete
  toggleComplete = (id: string) => {
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      }),
    });
  };

  actions = {
    toggleComplete: this.toggleComplete,
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <TodoList list={this.state.list} actions={this.actions} />
        </div>
      </div>
    );
  }
}

export default App;
