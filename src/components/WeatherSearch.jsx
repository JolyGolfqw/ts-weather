import React from 'react';

function WeatherSearch({ onSearch }) {
  const cities = [
    { name: 'New York', latitude: 40.7128, longitude: -74.006 },
    { name: 'London', latitude: 51.5074, longitude: -0.1278 },
    { name: 'Tokyo', latitude: 35.6895, longitude: 139.6917 },
    { name: 'Sydney', latitude: -33.8688, longitude: 151.2093 },
    { name: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729 },
    { name: 'Grozny', latitude: 43.3183, longitude: 45.6828 },
    { name: 'Nazran', latitude: 43.2278, longitude: 44.7622 },
  ];

  const handleSelect = (e) => {
    const selectedCity = cities.find((city) => city.name === e.target.value);
    if (selectedCity) {
      onSearch(selectedCity.latitude, selectedCity.longitude);
    }
  };

  return (
    <div className="flex justify-center">
      <select
        onChange={handleSelect}
        className="rounded-md px-4 py-2 border border-gray-300 text-black"
      >
        <option value="">Выберите город</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default WeatherSearch;
