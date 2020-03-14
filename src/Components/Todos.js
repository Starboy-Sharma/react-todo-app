import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class Todos extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        {this.props.todos.map(todo => (
          <TodoItem
            markComplete={this.props.markComplete}
            deleteTodo={this.props.deleteTodo}
            key={todo.id}
            todo={todo}
          />
        ))}
      </div>
    );
  }
}

// Set ProPTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
};

export default Todos;
