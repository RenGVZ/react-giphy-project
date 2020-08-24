import React, { Component } from 'react';

class SearchBar extends Component {
  handleClick = (event) => {
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search for a gif..."
        className="form-control form-search"
        onChange={this.handleClick}
      />
    );
  }
}

export default SearchBar;
