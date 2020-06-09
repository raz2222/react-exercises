import React, { Component } from "react";
import "./Filter.scss";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Big fox",
        "Small elephant",
        "Big ant",
        "Small dinosaur",
        "Medium dog",
      ],
    };
  }
  onChangeHandler(e) {
    this.setState({
      input: e.target.value,
    });
  }

  render() {
    return (
      <div className="Filter">
        <p>Filter the list as you type.</p>
        <input placeholder="Search..." className="Filter__textbox" />
        <ul>
          {this.state.items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Filter;
