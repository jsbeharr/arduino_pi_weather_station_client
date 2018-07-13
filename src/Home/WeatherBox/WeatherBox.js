import React from 'react';
import './WeatherBox.css';
const moment = require('moment');

const weather_box = (props) => {

  const temperature = props.current_weather.temperature;
  const humidity = props.current_weather.humidity;
  const pressure = props.current_weather.pressure;
  const wind_speed = props.current_weather.wind_speed;

  return (
    <div className='WeatherBox'>
      <div className='card'>
        <header>
          <p>{temperature}&deg;F</p>
          <p>{moment().format('dddd')}</p>
          <p>{moment().format('MMMM D, YYYY')}</p>
        </header>
          <p>Humidity: {humidity}%         </p>
          <p>Pressure: {pressure} Hg       </p>
          <p>Wind Speed: {wind_speed} m/s  </p>
      </div>
    </div>
  );
};

export default weather_box;