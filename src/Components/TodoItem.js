import React from "react";

class TodoItem extends React.Component {
  // Dynamic Style Apply whenever user update todo then todo renders again and this tyle come in play.
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.status ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo; // Object Destructuring

    return (
      <div style={this.getStyle()}>
        <p className="todo-items">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button
            type="button"
            title="Delete Todo"
            onClick={this.props.deleteTodo.bind(this, id)}
            className="btn btn-sm btn-outline-danger delete-button"
          >
            X
          </button>
        </p>
      </div>
    );
  }
}

export default TodoItem;
