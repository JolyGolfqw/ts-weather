import React, { useState, useEffect } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherSearch from "./components/WeatherSearch";

interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface IWeather {
  elevation: number;
  generationtime_ms: number;
  hourly: { time: string[]; temperature_2m: number[] };
  hourly_units: { time: string; temperature_2m: "string" };
  latitude: string;
  longitude: string;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}

function App(): JSX.Element {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [weatherData, setWeatherData] = useState<IWeather | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
console.log(coordinates)
  useEffect(() => {
    if (coordinates) {
      setLoading(true);
      const { latitude, longitude } = coordinates;
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`
      )
        .then((response) => response.json())
        .then((data: IWeather) => {
          setWeatherData(data);
          setLoading(false);
        });
    }
  }, [coordinates]);

  const handleSearch = (latitude: number, longitude: number) => {
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
