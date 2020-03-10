import React from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import * as uuid from "uuid";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  // Toggle Todo
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.status = !todo.status;
        }

        return todo;
      })
    });
  };

  // Delete todo
  deleteTodo = id => {
    // Filter all other todos and update state by ignoring given id of Todo.
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };

  // Add Todos
  addTodo = title => {
    const newTodo = { id: uuid.v4(), title, status: false };

    // Update State
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  // Before Component Mount On DOM
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res =>
        this.setState({
          todos: res.data
        })
      );
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "35px" }}>
        <h1>React Todo List</h1>
        <AddTodo addTodo={this.addTodo} />
        <Todos
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
