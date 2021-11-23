import React from "react";

export default function FormattedDate(props) {
 
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[props.time.getDay()];
  let hours = props.time.getHours();
  hours = hours > 9 ? hours : "0" + hours;
  let minutes = props.time.getMinutes();
  minutes = minutes > 9 ? minutes : "0" + minutes;
  return (
    <div className="FormattedDate">
      Last updated: {day} {hours}:{minutes}
    </div>
  );
}
