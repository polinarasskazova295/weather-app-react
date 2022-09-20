import React from "react";
import ForecastIcon from "./ForecastIcon";

export default function ForecastDay(props){

    function day(){
        let date= new Date(props.data.dt * 1000);
        let day= date.getDay();
        
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];

        return days[day];
    }
    return(
        <div>
 <div className="day"> {day()} </div>
        <div className="icon" role="img">
          <ForecastIcon code={props.data.weather[0].icon} size="50" />
        </div>
        <div className="temp">
          <span className="temp-max"> {Math.round(props.data.temp.max)}° </span>
          <span className="temp-min"> {Math.round(props.data.temp.min)}°</span>
        </div>
        </div>
    )
}