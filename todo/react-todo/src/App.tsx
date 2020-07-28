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

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <TodoList list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
