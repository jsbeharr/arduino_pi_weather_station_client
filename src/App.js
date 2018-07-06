import React, { Component } from 'react';
import './App.css';
import git_lab_logo from './images/git_lab_logo.png';
import cloudy_rain  from './images/cloudy_rain.png';
import Banner from './Banner/Banner';
import WeatherBox from './WeatherBox/WeatherBox';
import DetailBox from './DetailBox/DetailBox';

class App extends Component {

  state = {
    'temperature'   :   56,
    'humidity'      :   80,
    'pressure'      :   20.76,
    'wind_speed'    :   3.5,
    'wetness'       :   1020,
    'weather_image' :   cloudy_rain,
  };

  render() {
    return (
      <div className='App'>
        <div class='info_panel'>
          <a 
            href='https://gitlab.eecs.umich.edu/rubinz/arduino_pi_weather_station'
            target='_blank'
            rel='noopener noreferrer' >
            <img 
              id='git_lab' 
              src={git_lab_logo}
              alt='git lab icon' /> 
          </a>
        </div>
        <Banner color={this.state.wetness} image={this.state.weather_image}/>
        <div className="content">
          <WeatherBox />
        </div>
      </div>
    );
  };
}

export default App;
