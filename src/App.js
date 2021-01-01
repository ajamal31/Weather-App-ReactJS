import React, { useState } from "react";
import weatherLogo from "./weatherLogo.png";
import "./App.css";

function App() {
  var city = "San Jose";
  var countryCode = "USA";
  const apiKey = "cecfe61da45b46b0ff77615eed1fd730";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;
  const [weather, setWeather] = useState("");
  const [icon, setIcon] = useState(null);

  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      var temperature = Math.round(data["main"].temp);
      var iconUrl = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`;
      setWeather(temperature);
      setIcon(iconUrl);
    });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>
            Arun's Weather App{" "}
            <img className="App-logo" src={weatherLogo} alt="" />
          </h3>
        </div>
        <img src={icon} alt="" />
        <p>
          The weather in {city}, {countryCode} is <b>{weather}°C</b>
        </p>
      </header>
    </div>
  );
}

export default App;
