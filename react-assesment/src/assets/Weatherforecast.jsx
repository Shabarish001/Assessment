import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const WeatherComponent = () => {
  const [temperatures, setTemperatures] = useState([]);
  const [position, setPosition]         = useState({ lat: null, long: null });
  const apiKey                          = '83eec0f4bdaee4b91c0da5df5b43e28c';   // API key by Open weatherMap

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      setPosition({ lat: latitude, long: longitude });

      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const dailyTemps = data.daily.map(day => day.temp.day);
          setTemperatures(dailyTemps);
        })
        .catch(error => console.error(error));
    });
  }, []);

  const data = {
    labels  : ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
    datasets: [
      {
        label          : 'Daily Temperature (°C)',
        data           : temperatures,
        fill           : false,
        backgroundColor: 'green',
        borderColor    : 'green',
      },
    ],
  };

  return (
  <div className = 'flex flex-wrap justify-center items-center h-96 mt-20 p-2'>
  <div className = "relative w-full sm:w-3/4 lg:w-1/2 xl:w-2/5 bg-white rounded-2xl overflow-hidden shadow-lg">
      {temperatures.length > 0 ? (
        <Line data = {data} />
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
};

export default WeatherComponent;