## React_assessment (Bar and LineGraphs)

#Table of contents
1. DyanamicBarGraph
2. LineGraph

## Installation and Setup Instructions
  Starting with the cloning of the repository. You require `node` and `npm` installed globally on your machine
* Installation:

  `npm install`
* Development Server: 

  `npm run dev`
* To Visit App:

  `localhost:5137/`

# Required dependencies and libraries to run the project
* React
* react-chartjs-2
* Chart.js

## Project Screen Shot(s)
#### Example:


## Description
In my recent project, I focused on creating two Dynamic chart components: a Dynamic Bar Chart and a Line Chart for weather forecasting.

Starting with the Dynamic Bar Chart, this component is quite interactive and user-friendly. It features a "Generate Graph" button that, when clicked, brings up a pop-up with input fields. These fields are designed to accept only numerical values. When a user enters a number greater than zero, the bar chart dynamically adjusts to reflect this input. This functionality is made possible through the use of React's useState hook. I utilized two separate useState instances: one for managing the display of input fields and another for handling changes in input values, ensuring a responsive and interactive chart experience.

Moving on to the Line Chart, this component is crafted to display a weather forecast. I integrated it with OpenWeatherMap.org, using a third-party API key to fetch weather data. When the component is first rendered, it uses the browser's geolocation feature to determine the user's current position The chart makes good use of React's useEffect hook for API data fetching and useState for temperature and user coordinates. With this data in hand, will display the temperature forecast for a 7-day period daily using lineChart.

Both these components show efficiency and power of React in creating dynamic and data-driven visualizations. The Bar Chart offers a hands-on, user-interactive experience, while the Line Chart provides useful and dynamically updated weather information, showcasing the versatility and capability of React in handling various types of data and user interactions.

#Note: 
Make sure to allow the permission when you open the app in browser so that it can detect the location of the user using lat and long. 
