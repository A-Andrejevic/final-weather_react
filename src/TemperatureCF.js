import React, { useState } from "react";
import "./TemperatureCF.css";
export default function TemperatureCF(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureCF">
        <span className="current-temperature">{props.celsius}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>{" "}
          |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    let fahrenheitTemperature = Math.round((props.celsius * 9) / 5) + 32;
    return (
      <div className="TemperatureCF ">
        <span className="current-temperature">{fahrenheitTemperature}</span>
        <div className="unit ">
          <a href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>{" "}
          |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            F
          </a>{" "}
        </div>
      </div>
    );
  }
}
