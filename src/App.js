import React, { useState } from "react";
import weatherLogo from "./weatherLogo.png";
import "./App.css";

function App() {
	const [city, setCity] = useState("Edmonton");
	const [countryCode, setCountryCode] = useState("Canada");
	const apiKey = "cecfe61da45b46b0ff77615eed1fd730";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;
	const [weather, setWeather] = useState("");
	const [icon, setIcon] = useState(null);
	const [time, setTime] = useState("");
	const [keyword, setKeyword] = useState("Search ...");
	const defaultMsg = "Search ...";
	const defaultCity = "Edmonton";

	function init() {
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				var temperature = Math.round(data["main"].temp);
				var iconUrl = `http://openweathermap.org/img/wn/${data["weather"][0].icon}@2x.png`;
				var dateTime = new Date(data["dt"] * 1000).toLocaleString();
				setWeather(temperature);
				setIcon(iconUrl);
				setTime(dateTime);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	// init();

	return (
		<div className="App">
			<header className="App-header">
				{" "}
				<h3 style={{ color: "lightgreen" }}>
					Arun's Weather App {""}
					<img className="App-logo" src={weatherLogo} alt="" />
				</h3>
			</header>
			<div className="App-body">
				<p style={{ color: "lightyellow" }}>{keyword}</p>
				<input
					className="App-input"
					type="text"
					placeholder={keyword}
					onChange={(e) => {
						var input = e.target.value;
						if (input) {
							setKeyword(input);
							// Use the following after implementing location autoimplement:
							// setCity(input);
						} else {
							setKeyword(defaultMsg);
							// Use the following after implementing location autoimplement:
							// setCity(defaultCity);
						}
					}}
				/>
				<img src={icon} alt="" />
				<b style={{ color: "orange" }}>{weather}°C</b>
				<p style={{ color: "lightpink" }}>
					{city}, {countryCode}
				</p>
				<b style={{ color: "lightblue" }}>{time}</b>
			</div>
		</div>
	);
}

export default App;
