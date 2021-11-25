import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import TemperatureCF from "./TemperatureCF";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function fetchWeatherData(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      feeling: Math.round(response.data.main.feels_like),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
      time: response.data.dt * 1000,
    });
  }

  function submitCity(event) {
    event.preventDefault();

    let apiKey = "745e466f4597986491c458e2888a3c22";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(url).then(fetchWeatherData);
  }

  function inputCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={submitCity}>
            <input
              type="search"
              placeholder="Enter location here"
              id="query-box"
              onChange={inputCity}
            />
            <input type="submit" value="Search" id="search-button" />
            <button id="location-button">Current location</button>
          </form>

          <h1>{weatherData.city}</h1>
          <ul>
            <li>
              <FormattedDate time={weatherData.time} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="clearfix d-flex justify-content-start">
                <WeatherIcon
                  icon={weatherData.icon}
                  alt={weatherData.description}
                />
                <TemperatureCF celsius={weatherData.temperature} />
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
                <li>Feels like: {weatherData.feeling}°C</li>
              </ul>
            </div>
          </div>
          <Forecast
            latitude={weatherData.latitude}
            longitude={weatherData.longitude}
          />
        </div>
      </div>
    );
  } else {
    let apiKey = "745e466f4597986491c458e2888a3c22";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(url).then(fetchWeatherData);
    return "Weather is loading...";
  }
}
