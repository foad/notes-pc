import React, { Component } from 'react';
import styles from '../styles/local.css';

export default class Checkbox extends Component {
  getCheckedIcon() {
    if (this.props.checked) return <i className="fa fa-check-square-o" />;
    else return <i className="fa fa-square-o" />;
  }

  render() {
    return (
      <div
        className="login__checkbox"
        onClick={() => this.props.handleToggle(this.props.checked)}
      >
        {this.getCheckedIcon()}
        <span className="login__label">{this.props.children}</span>
      </div>
    );
  }
}
