import React from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import Search from "./Components/Search";
import * as uuid from "uuid";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      todosClone: []
    };

    this.searchStart = undefined;
  }

  handleSearch = e => {
    if (this.searchStart) clearTimeout(this.searchStart);

    e.persist();

    this.searchStart = setTimeout(() => {
      if (e.target.value.length <= 0) {
        this.setState({
          todos: this.state.todosClone
        });
        return;
      }

      this.searchTodo(e);
    }, 300);
  };

  searchTodo(e) {
    let searchString = e.target.value;

    searchString = searchString.trim();

    if (searchString.length === 0) return;

    // Update todos on user search basis here...
    this.setState({
      todos: this.state.todosClone.filter(list => {
        if (list.title.toLowerCase().includes(searchString.toLowerCase()))
          return list;
      })
    });
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
          todos: res.data,
          todosClone: res.data
        })
      );
  }

  render() {
    return (
      <div className="container" style={{ marginTop: "35px" }}>
        <h1>React Todo List</h1>

        <Search searchTodo={this.handleSearch} />

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
