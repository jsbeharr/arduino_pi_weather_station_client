import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import git_lab_logo from './images/git_lab_logo.png';
import Home from './Home/Home';
import FaAlignRight from 'react-icons/lib/fa/align-right';


class App extends Component {

	state = {
		'weather_now': {
			'temperature': 88,
			'humidity': 80,
			'pressure': 20.76,
			'wind_speed': 6,
			'wetness': 1024,
		}
	};

	toggleResponsiveMenu = () => {
		let x = document.getElementById('topnav');
		x.className = x.className === '' ? 'responsive' : '';
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
						<Link to='/'>Home</Link>
						<Link to='/analytics'>Analytics</Link>
						<Link to='/history'>History</Link>
						<Link to='/export'>Export</Link>
						<Link to='/about'>About</Link>
						<FaAlignRight onClick={this.toggleResponsiveMenu} />
					</nav>
					<div className="page-content">
						<Route
							exact
							path='/'
							render={
								() => <Home
									temperature={this.state.weather_now.temperature}
									humidity={this.state.weather_now.humidity}
									pressure={this.state.weather_now.pressure}
									wind_speed={this.state.weather_now.wind_speed}
									wetness={this.state.weather_now.wetness} />
							}
						/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;