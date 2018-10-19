import React, { Component, Fragment } from 'react';

export default class NoteSort extends Component {
  getDirectionArrow(ascending) {
    if (ascending) return <i className="fa fa-arrow-up" />;
    return <i className="fa fa-arrow-down" />;
  }

  getSortMethod(method, ascending) {
    return (
      <>
        <span className="notesort__method">{method}</span>
        <span className="notesort__direction">
          {this.getDirectionArrow(ascending)}
        </span>
      </>
    );
  }

  getSortOptions() {
    const sortMethods = ['date', 'name'];
    const options = sortMethods.map((method, index) => {
      const isCurrentMethod = method === this.props.sortMethod;
      return (
        <Fragment key={index}>
          <li
            className={
              isCurrentMethod && this.props.sortAscending ? 'current' : ''
            }
          >
            {this.getSortMethod(method, true)}
          </li>
          <li
            className={
              isCurrentMethod && !this.props.sortAscending ? 'current' : ''
            }
          >
            {this.getSortMethod(method, false)}
          </li>
        </Fragment>
      );
    });
    return <ul className="notesort__options">{options}</ul>;
  }

  render() {
    return (
      <div className="notesort">
        <h2>Sort</h2>
        {this.getSortMethod(this.props.sortMethod, this.props.sortAscending)}
        {this.getSortOptions()}
      </div>
    );
  }
}
