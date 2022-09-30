import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import { getLngLat } from './utils/location';
import { getWeather } from './utils/getWeather';
import Weather from './components/Weather';

function App() {
  const [position, setPosition] = useState();
  const [error, setError] = useState();
  const [weather, setWeather] = useState()

  useEffect(() => {
    getLngLat(navigator, setPosition, setError);
  }, [])

  const handleGetWeather = async () => {
    const weather = await getWeather(position);
    console.log(weather);
    setWeather(weather);
  }

  useEffect(() => {
    position && handleGetWeather()
  }, [position])

  return (
    <div>
       <Header />
      {weather && <Weather
        city={weather.name}
        country={weather.sys.country}
        weather={weather.weather[0].main}
        deg={weather.main.temp.toFixed()}
        icon={weather.weather[0].icon}
      />}
    </div>
  );
}

export default App;
