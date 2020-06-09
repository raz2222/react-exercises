import React, { Component } from "react";
import "./Hide.scss";

class Hide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
    };
  }

  handleClick() {
    this.setState({
      showText: !this.state.showText,
    });
  }

  render() {
    return (
      <div className="Hide">
        <button onClick={this.handleClick.bind(this)}>Hide text now!</button>
        {this.state.showText ? (
          <p>
            You can read this text, but if you click the button it should
            disappear. Forever.
          </p>
        ) : null}
      </div>
    );
  }
}

export default Hide;
