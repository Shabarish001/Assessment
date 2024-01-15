import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

function weatherForecast () {
    const [weatherData, setweatherData] = useState([]);

{/* To get exact location of the User by Geolocation */}
    const getLocation = () => {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject('Geolocation is not supported by your browser');
        } else {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      });
    };
    

    const fetchWeatherData = async (latitude, longitude) => {
      const apiKey = 'YlGy6XVKHjqjX6mzHojYZdbFfJq5tflH'; // api key of tomorrow.io
      const url = `curl --compressed --request GET --url \
      'https://api.tomorrow.io/v4/timelines?location=40.75872069597532,-73.98529171943665&fields=temperature&timesteps=1h&units=metric&apikey=YlGy6XVKHjqjX6mzHojYZdbFfJq5tflH'`;
    
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data.daily; // Returns daily weather forecast
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    
 
    useEffect(() => {
      const fetchData = async () => {
        try {
          const position = await getLocation();
          const { latitude, longitude } = position.coords;
          const weatherForecast = await fetchWeatherData(latitude, longitude);
          setWeatherData(weatherForecast);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);

  const TemperatureGraph = ({ weatherData }) => {
   const data =  {
      label: weatherData.map((day,index) =>'Day ${index + 1}'),
      dataSet: [{
        label: "temp",
        data: weatherData.map(day => day.temp.day),
        backgroundColor: 'rgb(75, 192, 192)',
      }]
    }
    const Options = {
      plugins: {
        legend: {
          position: 'top',
          maintainAspectRatio: false,
  
        },
        title: {
          position: 'top',
          display: true,
          text: 'Line Chart',
          font: {
            size: 25,
          },
        },
      },
    };
 

  return(
    <div>
      <Line data={data} options={Options} />
    </div>
  );

  };
  
}
export default weatherForecast;
