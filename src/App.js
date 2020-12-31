import logo from './logo.svg';
import './App.css';

function App() {
  var city = 'Edmonton';
  var countryCode = 'CA';
  const apiKey = 'cecfe61da45b46b0ff77615eed1fd730';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${apiKey}`;
  
  fetch(url).then((response) => response.json())
    .then(function (data) {
      var temp = Math.round(data['main'].temp) + '°C';
      console.log('The weather in Edmonton right now is ' + temp + '.');
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
