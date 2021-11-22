import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);

  let [icon, setIcon] = useState(null);
  let [maxtemp, setMaxtemp] = useState(null);
  let [mintemp, setMintemp] = useState(null);

  function handleForecastResponse(response) {
    console.log(response);
    setLoaded(true);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
    );
    setMaxtemp(response.data.daily[0].temp.max);
    setMintemp(response.data.daily[0].temp.min);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          <div className="col">
            <div className="forecast-day">Mon</div>
            <div className="forecast-icon">
              <img src={icon} alt="weather icon" />
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
