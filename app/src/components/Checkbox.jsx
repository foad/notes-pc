import React, { Component } from "react";
import styles from "../styles/local.css";

export default class Checkbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: props.checked
    };

    this.getCheckedIcon = this.getCheckedIcon.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked
    });
  }

  getCheckedIcon() {
    if (this.state.checked) return <i className="fa fa-check-square-o" />;
    else return <i className="fa fa-square-o" />;
  }

  render() {
    return (
      <div
        className="login__checkbox"
        onClick={() => this.props.handleToggle(this.state.checked)}
      >
        {this.getCheckedIcon()}
        <span className="login__label">{this.props.children}</span>
      </div>
    );
  }
}
