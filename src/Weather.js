import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <input
            type="search"
            placeholder="Enter location here"
            id="query-box"
          />
          <input type="submit" value="Search" id="search-button" />
          <button id="location-button">Current location</button>
        </form>

        <h1>Belgrade</h1>
        <ul>
          <li>Time</li>
          <li>Weather description</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix float-left current-weather">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy"
              />

              <span className="current-temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: 5%</li>
              <li>Wind: 5 km/h</li>
              <li>Feels like: 5°C</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
