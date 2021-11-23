import axios from "axios";
import React, { useState } from "react";
import "./Forecast.css";
import ForecastDay from "./ForecastDay";


export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
            {forecast.map((dailyForecast, index) => {
              if (index < 5) {
                return (
                  <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>);
            } else {return null;}})}
          
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
