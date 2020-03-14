import React from "react";

class Search extends React.Component {
  render() {
    return (
      <form style={{ margin: "1rem 0" }}>
        <input
          type="text"
          onKeyUp={this.props.searchTodo}
          className="form-control"
          placeholder="Search List here..."
        />
      </form>
    );
  }
}

export default Search;
