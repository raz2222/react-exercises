import React, { Component } from "react";
import "./Weather.scss";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daysWeatherData: [],
      maxTemp: { day: 0, temperature: null },
      minTemp: { day: 0, temperature: null },
    };
    this.days = [
      "Sunday",
      "Monday",
      "Tusday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  }

  componentDidMount() {
    fetch(
      "https://my-json-server.typicode.com/evyros/react-weather-app/forecast"
    )
      .then((data) => data.json())
      .then((daysWeatherData) => {
        this.setState({ daysWeatherData });

        this.setState({
          maxTemp: {
            day: daysWeatherData[0].day,
            temperature: daysWeatherData[0].temperature,
          },
          minTemp: {
            day: daysWeatherData[0].day,
            temperature: daysWeatherData[0].temperature,
          },
        });

        this.state.daysWeatherData.forEach((dayData) => {
          if (dayData.temperature > this.state.maxTemp.temperature) {
            this.setState({
              maxTemp: { day: dayData.day, temperature: dayData.temperature },
            });
          }
          if (dayData.temperature < this.state.minTemp.temperature) {
            this.setState({
              minTemp: { day: dayData.day, temperature: dayData.temperature },
            });
          }
        });
      });
  }

  render() {
    return (
      <div className="Weather">
        <p>
          Use the following API to display the hottest and coldest days:
          <br />
          <code>
            https://my-json-server.typicode.com/evyros/react-weather-app/forecast
          </code>
        </p>
        <div className="Weather__stats">
          <strong>Hottest day is: {this.days[this.state.maxTemp.day]}</strong>
        </div>
        <div className="Weather__stats">
          <strong>Coldest day is: {this.days[this.state.minTemp.day]}</strong>
        </div>
      </div>
    );
  }
}

export default Weather;
