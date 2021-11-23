import React from "react";

export default function FormattedDate(props) {
 let lastUpdated = new Date(props.time);
 
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[lastUpdated.getDay()];
  let hours = lastUpdated.getHours();
  hours = hours > 9 ? hours : "0" + hours;
  let minutes = lastUpdated.getMinutes();
  minutes = minutes > 9 ? minutes : "0" + minutes;
  return (
    <div className="FormattedDate">
      Last updated: {day} {hours}:{minutes}
    </div>
  );
}
