import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [forecast, setForecast] = useState("");
  

  function forecastInformation(response) {
    return setForecast(
      <div className="Weather">
        <h3>{response.data.name}</h3>
        <div className="container">
          <div className="row">
            <div className="col-6 ">
              <p>
                {" "}
                <img
                  src={`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
                  alt={response.data.weather.description}
                />{" "}
              </p>
              <p>{Math.round(response.data.main.temp)}°C</p>
            </div>
            <div className="col-6 ">
              <p>{response.data.weather[0].description}</p>
              <p> Humidity:{response.data.main.humidity}%</p>
              <p> Wind:{Math.round(response.data.wind.speed)}m/s</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99da04848d12f6363764ab7d54adc040&units=metric`;
    axios.get(apiUrl).then(forecastInformation);
  }

  function upDateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                onChange={upDateCity}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>
      <h2> {forecast} </h2>
    </div>
  );
}
