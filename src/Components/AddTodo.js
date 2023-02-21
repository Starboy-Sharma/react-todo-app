import React from "react";

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };

    this.baseState = this.state;
  }

  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    e.persist();
    if (this.state.title.trim().length) this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group row" style={{ padding: "0px 0px 0px 15px" }}>
          <input
            type="text"
            name="title"
            autoComplete="off"
            placeholder="I will keep your task..."
            onChange={this.handleTitle}
            value={this.state.title}
            className="form-control col-md-10 col-sm-10 col-lg-11"
          />
          <button type="submit" className="btn btn-dark btn-sm">
            Save
          </button>
        </div>
      </form>
    );
  }
}

export default AddTodo;
