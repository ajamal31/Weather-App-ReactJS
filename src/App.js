import React, { useState } from "react";
import weatherLogo from "./weatherLogo.png";
import "./App.css";

function App() {
  var city = "Edmonton";
  var countryCode = "Canada";
  const apiKey = "cecfe61da45b46b0ff77615eed1fd730";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;
  const [weather, setWeather] = useState("");

  fetch(url)
    .then((response) => response.json())
    .then(function (data) {
      var temperature = Math.round(data["main"].temp);
      setWeather(temperature);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={weatherLogo} alt=""/>
        <p>
          The weater right now in {city}, {countryCode} is <b>{weather}°C</b>
        </p>
      </header>
    </div>
  );
}

export default App;
