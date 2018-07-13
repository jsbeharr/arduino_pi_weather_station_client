import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import git_lab_logo from './images/git_lab_logo.png';
import weather_wind from './images/weather-wind.png';
import Home from './Home/Home';
import FaAlignRight from 'react-icons/lib/fa/align-right';


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

  toggleResponseBar = () => {
    let x = document.getElementById('topnav');
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  render() {
    return (
      <Router>
        <div className='App'>
          <nav id='topnav'>
            <a 
              href='https://gitlab.eecs.umich.edu/rubinz/arduino_pi_weather_station'
              target='_blank'
              rel='noopener noreferrer'>
              <img 
                src={git_lab_logo}
                alt='git lab icon' />
            </a>
            <Link to='/home'>Home</Link>
            <Link to='/detail'>Detail</Link>
            <Link to='/about'>About</Link>
            <FaAlignRight onClick={this.toggleResponseBar} />
          </nav>
          <div className="page-content">
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
