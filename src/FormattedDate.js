import React from "react";

export default function FormattedDate(props) {
  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  hours = hours > 9 ? hours : "0" + hours;
  let minutes = now.getMinutes();
  minutes = minutes > 9 ? minutes : "0" + minutes;

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[now.getDay()];
  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[now.getMonth()];

  return (
    <div className="FormattedDate">
      {day} {month} {date}, {hours}:{minutes}
    </div>
  );
}
