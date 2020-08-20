import React, { Component } from 'react';

class SearchBar extends Component {
  handleSearch = (event) => {
    this.props.searchFunc(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-search form-control"
        onChange={this.handleSearch}
      />
    );
  }
}

export default SearchBar;
