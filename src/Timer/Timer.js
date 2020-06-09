import React, { Component } from "react";
import "./Timer.scss";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      start: 0,
      isOn: false,
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      time: this.state.time,
      start: Date.now() - this.state.time,
      isOn: true,
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start,
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0 });
  }
  render() {
    let play =
      this.state.time === -0 ? (
        <button onClick={this.startTimer}>start</button>
      ) : null;
    let pause = this.state.isOn ? (
      <button onClick={this.stopTimer}>stop</button>
    ) : null;
    let reset =
      this.state.time !== 0 && !this.state.isOn ? (
        <button onClick={this.resetTimer}>reset</button>
      ) : null;

    return (
      <div className="Timer">
        <h3>Timer</h3>
        <ul className="Timer__explanation">
          <li>
            <b>Play:</b> the timer should count the seconds and keep updating
          </li>
          <li>
            <b>Pause:</b> the timer freeze the timer
          </li>
          <li>
            <b>Reset:</b> should set the timer to 0
          </li>
        </ul>
        <div className="Timer__actions">
          <button>{play}</button>
          <button>{pause}</button>

          <button>{reset}</button>
        </div>
        <div className="Timer__value">{this.state.time}</div>
      </div>
    );
  }
}

export default Timer;
