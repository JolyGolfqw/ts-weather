import React, { useState, useEffect } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import WeatherSearch from './components/WeatherSearch';

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (coordinates) {
      setLoading(true);
      const { latitude, longitude } = coordinates;
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setLoading(false);
        });
    }
  }, [coordinates]);

  const handleSearch = (latitude, longitude) => {
    setCoordinates({ latitude, longitude });
  };

  return (
    <div className="min-h-screen bg-003399 text-white">
      <div className="container mx-auto py-12">
        <div className="w-500 mx-auto">
          <WeatherSearch onSearch={handleSearch} />
          {loading && (
            <p className="mt-8 text-center text-gray-500">Загрузка данных...</p>
          )}
          {!loading && weatherData && (
            <WeatherDisplay weatherData={weatherData} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
