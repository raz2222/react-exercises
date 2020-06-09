import React, { Component } from "react";
import "./RandomNumber.scss";

class RandomNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      random: null,
    };
  }

  min = 1;
  max = 100;

  handleClick = () => {
    this.setState({
      random: this.min + Math.random() * (this.max - this.min),
    });
  };
  render() {
    return (
      <div className="RandomNumber">
        <p className="RandomNumber__explanation">
          When clicking on the button, make a random number (between 1-100) to
          appear in the box.
        </p>

        <button onClick={this.handleClick}>Generate number!</button>
        <div className="box"> {this.state.random}</div>
      </div>
    );
  }
}

export default RandomNumber;
