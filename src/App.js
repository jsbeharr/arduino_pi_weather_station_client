import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import git_lab_logo from './images/git_lab_logo.png';
import weather_wind from './images/weather-wind.png';
import Home from './Home/Home';

class App extends Component {

  state = {
    'weather_now'   : {
      'temperature'   :   56,
      'humidity'      :   80,
      'pressure'      :   20.76,
      'wind_speed'    :   3.5,
      'wetness'       :   1020,
    },
    'weather_image' :   weather_wind,
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <nav>
            <Link to='/home'>Home</Link>
            <Link to='/detail'>Detail</Link>
            <div id='info_panel'>
              <p>About</p>
              <a 
                href='https://gitlab.eecs.umich.edu/rubinz/arduino_pi_weather_station'
                target='_blank'
                rel='noopener noreferrer' >
                <img 
                  src={git_lab_logo}
                  alt='git lab icon'  /> 
              </a>
            </div>
          </nav>
          <div className="content">
            <Route 
                path='/home' 
                render={ 
                  (props) => <Home 
                    image={this.state.weather_image}
                    current_weather={this.state.weather_now} />
                    } />
            <Redirect from='/' to='/home' />
          </div>
        </div>
      </Router>
    );
  };
}

export default App;
