import React, { useState, useEffect } from "react";
import weatherLogo from "./weatherLogo.png";
import "./App.css";

const api = {
	key: "cecfe61da45b46b0ff77615eed1fd730",
	baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

function App() {
	const [parameters, setParameters] = useState("Edmonton,CA");
	const [weather, setWeather] = useState({});
	const [keyword, setKeyword] = useState("Search ...");
	const defaultParameter = "Edmonton,CA";

	useEffect(async () => {
		const response = await fetch(
			`${api.baseUrl}?q=${parameters}&units=metric&appid=${api.key}`
		);
		const results = await response.json();
		setWeather(results);
	}, [parameters]);

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
				{weather.weather ? (
					<div className="App-icon">
						<img
							src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
							alt=""
						/>
					</div>
				) : (
					<div></div>
				)}
				<input
					id="inputField"
					className="App-input"
					type="text"
					placeholder={keyword}
					onChange={(e) => {
						var input = e.target.value;
						input ? setParameters(input) : setParameters(defaultParameter);
					}}
				/>
				{weather.main ? (
					<div>
						<p style={{ color: "orange" }}>
							<b>{Math.round(weather.main.temp)}°C</b>
						</p>
						<p style={{ color: "lightpink" }}>
							{weather.name}, {weather.sys.country}
						</p>
						<p style={{ color: "lightblue" }}>
							{new Date(weather.dt * 1000).toLocaleString()}
						</p>
					</div>
				) : (
					<div>Enter a valid location!</div>
				)}
			</div>
		</div>
	);
}

export default App;
