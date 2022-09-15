import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [forecast, setForecast] = useState({ ready: false });

  function forecastInformation(response) {
    return setForecast({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=99da04848d12f6363764ab7d54adc040&units=metric`;
    axios.get(apiUrl).then(forecastInformation);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function upDateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (forecast.ready) {
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
                  autoFocus="on"
                  onChange={upDateCity}
                />
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="Weather">
          <div className="top">
            <h1>{forecast.city}</h1>
            <p className="date"> <FormattedDate date={forecast.date} /> </p>
            <p className=" description text-capitalize">
              {forecast.description}
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6 ">
                <p className="left-side">
                  <img
                    src={`http://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
                    alt={forecast.description}
                  />
                  <span className="temperature">
                    {Math.round(forecast.temperature)}
                  </span>
                  <span className="celsium">°C</span>{" "}
                </p>
              </div>
              <div className="col-6 ">
                <div className="right-side">
                  <p>
                    {" "}
                    Humidity: <strong>{forecast.humidity}%</strong>
                  </p>
                  <p> Wind: <strong>{forecast.wind}m/s</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
