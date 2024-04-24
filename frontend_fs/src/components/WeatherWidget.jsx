import React, { useEffect, useState } from 'react';

const WeatherWidget = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch('URL_DE_L_API_METEO');
      const data = await response.json();
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-widget">
      <h2>Météo Locale</h2>
      <p>Température: {weather.temp}°C</p>
      <p>Condition: {weather.description}</p>
    </div>
  );
};

export default WeatherWidget;
