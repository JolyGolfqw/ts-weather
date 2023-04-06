import React from 'react';

function WeatherDisplay({ weatherData }) {
  const { hourly } = weatherData;
  const temperature = hourly.temperature_2m[0];

  return (
    <div className="mt-8 text-center text-blue-700">
      <h2 className="text-3xl font-semibold">
        Current Temperature: {temperature}°C
      </h2>
    </div>
  );
}

export default WeatherDisplay;
