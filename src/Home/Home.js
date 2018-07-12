import React from 'react';
import Banner from './Banner/Banner';
import WeatherBox from './WeatherBox/WeatherBox';
import DetailBox from './DetailBox/DetailBox';
import './Home.css';

const home = (props) => {
  return (
    <div className="Home">
      <Banner image={props.image} />
      <div className='content'>
        <WeatherBox current_weather={props.current_weather} />
        <DetailBox />
      </div>
    </div>
  );
}

export default home;