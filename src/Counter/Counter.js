import React, { Component } from "react";
import "./Counter.scss";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  render() {
    return (
      <div className="Counter">
        <p>Make the button increase the value:</p>
        <button onClick={this.IncrementItem}>Increase</button>
        <div className="Counter__value">{this.state.clicks}</div>
      </div>
    );
  }
}

export default Counter;
