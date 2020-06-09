import React, { Component } from "react";
import "./YayValidator.scss";

class YayValidator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      backgroundcolor: "",
    };
  }
  onChange(inputEntry) {
    if (inputEntry) {
      this.setState({ ominputValue: "yay ", backgroundcolor: "green" }); // here I want to change the color to red
    } else {
      this.setState({ inputValue: inputEntry, backgroundcolor: "" }); // leave empty for default
    }
  }

  render() {
    const { backgroundcolor } = this.state;

    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(evt) => this.onChange(evt.target.value)}
        />
        <div style={{ backgroundColor: backgroundcolor }}>
          <p>
            When the input contains the value "yay", change the input's
            background color to{" "}
            <span className="YayValidator__sample">green</span>:
          </p>
        </div>
      </div>
    );
  }
}

export default YayValidator;
