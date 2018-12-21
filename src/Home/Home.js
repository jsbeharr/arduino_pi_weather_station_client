import React from 'react';
import PropTypes from 'prop-types';
import Clock from 'react-live-clock';
import moment from 'moment';
import {
	FlexibleXYPlot,
	XAxis,
	YAxis,
	VerticalGridLines,
	HorizontalGridLines,
	LineMarkSeries,
} from 'react-vis';
import './Home.css';
import wind from '../images/wind.png';
import clouds from '../images/clouds.png';
import rain from '../images/rain.png';

const MSEC_DAILY = 86400000;

class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = { temperatures: [
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1),
			Math.floor((Math.random() * 100) + 1)
		] };
	}

	refreshData() {
		this.setState(prevState => ({
			temperatures: [
				prevState.temperatures[1],
				prevState.temperatures[2],
				prevState.temperatures[3],
				prevState.temperatures[4],
				prevState.temperatures[5],
				prevState.temperatures[6],
				prevState.temperatures[7],
				prevState.temperatures[8],
				Math.floor((Math.random() * 100) + 1)
			]
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.refreshData(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {

		// a timestamp just for templating graph
		const timestamp = new Date('September 9 2017').getTime();

		// styling dependent on certain weather
		let style = {
			backgroundColor: '#2194f3'
		};

		// changes image depending on weather
		let weather_image = clouds;
		if (this.props.wetness < 600) {
			style.backgroundColor = '#4CAF50';
			weather_image = rain;
		} else if (this.props.wind_speed >= 8){
			style.backgroundColor = '#FFC107';
			weather_image = wind;
		}

		return (
			<div className="Home">
				<div className='banner' style={style}>
					<p id='title' className='banner_header'>Arduino Pi Weather Station</p>
					<div id='weather_img_container'>
						<img src={weather_image} alt='weather' />
					</div>
					<div id='location_time' className='banner_header'>
						<p>Ann Arbor, Michigan</p>
						<Clock format={'h:mm'} ticking timezone={'US/Eastern'} />
					</div>
				</div>
				<div className='content'>
					<div id='weather_box' className='card'>
						<header>
							<p>{this.props.temperature}&deg;F</p>
							<p>{moment().format('dddd')}</p>
							<p>{moment().format('MMMM D, YYYY')}</p>
						</header>
						<p>Humidity: {this.props.humidity}%         </p>
						<p>Pressure: {this.props.pressure} Hg       </p>
						<p>Wind Speed: {this.props.wind_speed} m/s  </p>
					</div>
					<div id='detail_box' className='card'>
						<FlexibleXYPlot
							xType="time"
							height={300}>
							<VerticalGridLines />
							<HorizontalGridLines />
							<XAxis title='Time' />
							<YAxis title='Temperature (&deg;F)' />
							<LineMarkSeries
								className="linemark-series-example-2"
								curve={'curveMonotoneX'}
								data={[
									{x: timestamp + MSEC_DAILY, y: this.state.temperatures[0]},
									{x: timestamp + MSEC_DAILY * 2, y: this.state.temperatures[1]},
									{x: timestamp + MSEC_DAILY * 3, y: this.state.temperatures[2]},
									{x: timestamp + MSEC_DAILY * 4, y: this.state.temperatures[3]},
									{x: timestamp + MSEC_DAILY * 5, y: this.state.temperatures[4]},
									{x: timestamp + MSEC_DAILY * 6, y: this.state.temperatures[5]},
									{x: timestamp + MSEC_DAILY * 7, y: this.state.temperatures[6]},
									{x: timestamp + MSEC_DAILY * 8, y: this.state.temperatures[7]},
									{x: timestamp + MSEC_DAILY * 9, y: this.state.temperatures[8]},
								]} />
						</FlexibleXYPlot>
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	temperature: PropTypes.number.isRequired,
	humidity: PropTypes.number.isRequired,
	pressure: PropTypes.number.isRequired,
	wind_speed: PropTypes.number.isRequired,
	wetness: PropTypes.number.isRequired
};

Home.defaultProps = {
	temperature: 33,
	humidity: 90,
	pressure: 42.23,
	wind_speed: 2.3,
	wetness: 1024
};

export default Home;