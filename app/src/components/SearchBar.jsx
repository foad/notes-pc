import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search"
          onChange={event => this.props.searchNotes(event.target.value)}
        />
      </div>
    );
  }
}
