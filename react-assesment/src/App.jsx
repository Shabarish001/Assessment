import React from 'react';
import DynamicBarChart from './assets/DynamicBarChart';
import WeatherComponent from './assets/Weatherforecast';

const App = () => {
  return (
    <div className = "App">
      <DynamicBarChart />
      <WeatherComponent/>
    </div>
  );
};

export default App;
