import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather"
import Forecast from "./Forecast"
import Github from "./Github"


export default function App() {
  return (
    <div className="App">
      <div className="allBody">
        <Weather defaultCity="Berlin" />
        <Forecast />
   
      </div>
      <Github />
    </div>
  );
}


