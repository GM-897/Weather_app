import { useState } from "react";
import Search from "./components/Nav";
import CurrentWeather from "./components/current-weather/CurrentWeather";
import Forecast from "./components/forecast";
import { WEATHER_API_URL, API_KEY } from "./api";
import "./App.css";

// import Intro from "./Intro";


function App() {
  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(""); 

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err)=>console.log(err));
  }
  console.log(currentWeather);
  console.log(forecast);

  return (//shutup
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {/* <Intro /> */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/* {forecast && <Forecast data={forecast} />} */}
    </div>
  );
}

export default App;