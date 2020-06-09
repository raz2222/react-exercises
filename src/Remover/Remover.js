import React, { Component } from "react";
import "./Remover.scss";

class Remover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        "Abby Mecoil",
        "Toni Zuck",
        "Peter Hanshfield",
        "Rose Tobernak",
      ],
    };
  }
  handleDelete = (itemId) => {
    const students = this.state.students.filter(
      (students) => students.id !== students.Id
    );
    this.setState({ students: students });
  };
  render() {
    return (
      <div className="Remover">
        <h3>Remover:</h3>
        <p>Add a delete button for each student to remove it from the list.</p>
        <ul className="Remover__list">
          {this.state.students.map((students) => (
            <li
              key={students.id}
              value={students.value}
              onDelete={this.handleDelete}
              id={students.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Remover;
