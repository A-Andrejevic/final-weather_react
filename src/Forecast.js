import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);

  let [icon, setIcon] = useState(null);
  let [maxtemp, setMaxtemp] = useState(null);
  let [mintemp, setMintemp] = useState(null);
let forecastDay = new Date(props.day);
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[forecastDay.getDay()];
  function handleForecastResponse(response) {
    setLoaded(true);
    setIcon(response.data.daily[0].weather[0].icon);
    setMaxtemp(response.data.daily[0].temp.max);
    setMintemp(response.data.daily[0].temp.min);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">{day}</div>
            <div className="forecast-icon">
              <WeatherIcon icon={icon} />
            </div>
            <div className="forecast-temperatures">
              <span className="forecast-max-temperature">
                {Math.round(maxtemp)}°C{" "}
              </span>
              <span className="forecast-min-temperature">
                {Math.round(mintemp)}°C
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.longitude;
    let latitude = props.latitude;
    let apiKey = "745e466f4597986491c458e2888a3c22";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleForecastResponse);
    return null;
  }
}
