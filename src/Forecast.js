import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Forecast.css"
import axios from "axios"
import ForecastDay from "./ForecastDay"

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

useEffect(() => {
  setLoaded(false);
}, [props.coordinates]);


  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast)
return (
  <div className="forecast">
    <div className="row">
      {forecast.map(function (dailyForecast, index) {
        if (index < 5) {
          return (
            <div className="col" key={index}>
              <ForecastDay data={dailyForecast} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  </div>
);
  } else {
 
   let longitude = props.coordinates.lon;
   let latitude = props.coordinates.lat;
   let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=73c99c48b6311d7fc949721ab46eb890&units=metric`;
   axios.get(apiUrl).then(handleResponse);

   return null;
}
}
