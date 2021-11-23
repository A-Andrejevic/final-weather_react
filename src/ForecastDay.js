import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  function day() {
    let forecastDay = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[forecastDay.getDay()];

    return day;
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <WeatherIcon icon={props.data.weather[0].icon} />
      </div>
      <div className="forecast-temperatures">
        <span className="forecast-max-temperature">
          {Math.round(props.data.temp.max)}°{"  "}
        </span>
        <span className="forecast-min-temperature">
          {"  "}
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
