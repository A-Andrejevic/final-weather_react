import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import TemperatureCF from "./TemperatureCF";
import Forecast from "./Forecast";
import WeatherIcon from "./WeatherIcon";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [location, setLocation] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [feeling, setFeeling] = useState(null);
  let [longitude, setLongitude] = useState(null);
  let [latitude, setLatitude] = useState(null);
  let [time, setTime] = useState(null);

  window.onload = (event) => {
    city = "Stockholm";
    setLocation(`${city}`);
    let apiKey = "745e466f4597986491c458e2888a3c22";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    function defaultCity(response) {
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setWind(response.data.wind.speed);
      setFeeling(Math.round(response.data.main.feels_like));
      setHumidity(response.data.main.humidity);
      setLongitude(response.data.coord.lon);
      setLatitude(response.data.coord.lat);
      setTime(response.data.dt * 1000);
      setIcon(response.data.weather[0].icon);
    }
    axios.get(url).then(defaultCity);
  };

  function submitCity(event) {
    event.preventDefault();
    setLocation(`${city}`);
    let apiKey = "745e466f4597986491c458e2888a3c22";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    axios.get(url).then(showCurrentWeather);

    function showCurrentWeather(response) {
      setLocation(response.data.name);
      setTemperature(Math.round(response.data.main.temp));
      setDescription(response.data.weather[0].description);
      setFeeling(Math.round(response.data.main.feels_like));
      setWind(response.data.wind.speed);
      setHumidity(response.data.main.humidity);
      setLongitude(response.data.coord.lon);
      setLatitude(response.data.coord.lat);
      setTime(response.data.dt * 1000);

      setIcon(response.data.weather[0].icon);
    }
  }

  function inputCity(event) {
    setCity(event.target.value);
  }

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

        <h1>{location}</h1>
        <ul>
          <li>
            <FormattedDate time={time} />
          </li>
          <li className="text-capitalize">{description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix float-left current-weather">
              <WeatherIcon icon={icon} alt={description}/>

              <TemperatureCF celsius={temperature} />
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {humidity}%</li>
              <li>Wind: {wind} km/h</li>
              <li>Feels like: {feeling}°C</li>
            </ul>
          </div>
        </div>
        <Forecast latitude={latitude} longitude={longitude} day={time}/>
      </div>
    </div>
  );
}
