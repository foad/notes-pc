import React, { Component } from "react";
import { remote } from "electron";

export default class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maximizeAction: "maximize"
    };
    this.toggleMaximize = this.toggleMaximize.bind(this);
  }

  componentWillUpdate(nextProps, nextState) {
    var window = remote.BrowserWindow.getFocusedWindow();
    if (nextState.maximizeAction == "maximize") {
      window.restore();
    } else {
      window.maximize();
    }
  }

  minimize() {
    var window = remote.BrowserWindow.getFocusedWindow();
    window.minimize();
  }

  toggleMaximize() {
    if (this.state.maximizeAction == "maximize") {
      this.setState({ maximizeAction: "restore" });
    } else {
      this.setState({ maximizeAction: "maximize" });
    }
  }

  close() {
    var window = remote.BrowserWindow.getFocusedWindow();
    window.close();
  }

  render() {
    return (
      <div className="menubar">
        <i className="fa fa-window-minimize smaller" onClick={this.minimize} />
        <i
          className={"fa fa-window-" + this.state.maximizeAction + " smaller"}
          onClick={this.toggleMaximize}
        />
        <i className="fa fa-close" onClick={this.close} />
      </div>
    );
  }
}
