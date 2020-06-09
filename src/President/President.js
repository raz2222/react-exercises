import React, { Component } from "react";
import "./President.scss";

class President extends Component {
  constructor(props) {
    super(props);
    this.state = {
      presidents: [
        {
          firstName: "Bill",
          lastName: "Clinton",
          image: "bill.jpeg",
        },
        {
          firstName: "George",
          lastName: "Bush",
          image: "george.jpeg",
        },
        {
          firstName: "Barack",
          lastName: "Obama",
          image: "barack.jpeg",
        },
      ],
    };
  }
  choosePresident(e) {
    const fullName =
      this.state.presidents[e.target.id].firstName +
      " " +
      this.state.presidents[e.target.id].lastName;
    this.setState({
      chosenPresident: fullName,
    });
  }

  render() {
    return (
      <div className="President">
        <p>
          When clicking on a president, display his <strong>full</strong> name
          below.
        </p>
        <div className="president-list">
          {this.state.presidents.map((president, index) => {
            return (
              <img
                key={index}
                id={index}
                src={require("./images/" + president.image)}
                onClick={this.choosePresident.bind(this)}
                alt=""
              />
            );
          })}
        </div>
        <div>
          <strong>You selected: </strong> {this.state.chosenPresident}
        </div>
      </div>
    );
  }
}

export default President;
