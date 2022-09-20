import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import ForecastIcon from "./ForecastIcon";
import WeatherTemperature from "./WeatherTemperature";
import Forecast from "./Forecast"

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [forecast, setForecast] = useState({ ready: false });

  function forecastInformation(response) {
    return setForecast({
      ready: true,
      coordinates: response.data.coord,
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=73c99c48b6311d7fc949721ab46eb890&units=metric`;
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
            <p className="date">
              {" "}
              <FormattedDate date={forecast.date} />{" "}
            </p>
            <p className=" description text-capitalize">
              {forecast.description}
            </p>
          </div>
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-6 ">
                <div className="left-side">
                  <ForecastIcon code={forecast.icon}  size={80}/>
                  <WeatherTemperature celsius={forecast.temperature} />
                </div>
              </div>
              <div className="col-6 ">
                <div className="right-side">
                  <p>
                    {" "}
                    Humidity: <strong>{forecast.humidity}%</strong>
                  </p>
                  <p>
                    {" "}
                    Wind: <strong>{forecast.wind}m/s</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Forecast coordinates={forecast.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
