import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          Wednesday
          <br />
          <span className="red"> 23°</span>
          <br />
          <span className="emoji" role="img">
            {" "}
            🌞{" "}
          </span>
        </div>
        <div className="col">
          Thursday
          <br />
          <span className="red"> 22°</span>
          <br />
          <span className="emoji" role="img">
            {" "}
            ⛅️{" "}
          </span>
        </div>
        <div className="col">
          Friday
          <br />
          <span className="red"> 19°</span>
          <br />
          <span className="emoji" role="img">
            {" "}
            🍃{" "}
          </span>
        </div>
        <div className="col">
          Saturday
          <br />
          <span className="red"> 26°</span>
          <br />
          <span className="emoji" role="img">
            {" "}
            🌻{" "}
          </span>
        </div>
        <div className="col">
          Sunday
          <br />
          <span className="red"> 25°</span>
          <br />
          <span className="emoji" role="img">
            {" "}
            ☔️{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
