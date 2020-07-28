import React, { Component } from "react";
import Header from "./components/utility/Header";
import TodoList from "./components/todo/TodoList";
import "./App.css";

class App extends Component {
  state = {
    list: [],
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
