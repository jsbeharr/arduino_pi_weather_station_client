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

class Home extends React.Component {

  constructor(props) {
    super(props);

    let image = clouds;
    if (props.wetness < 600) {
      image = rain;
    } else if (props.wind_speed >= 8){
      image = wind;
    }

    this.state = {
      current_image: image
    };
  }

  render() {

    return (
      <div className="Home">
        <div className='banner'>
          <p id='title' className='banner_header'>Arduino Pi Weather Station</p>
          <div id='weather_img_container'>
            <img src={this.state.current_image} alt='weather' />
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
              height={300}>
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis title='x-axis' />
              <YAxis title='y-axis' />
              <LineMarkSeries
                className="linemark-series-example"
                style={{
                  stroke: 'white'
                }}
                data={[
                  { x: 1, y: 10 },
                  { x: 2, y: 5 },
                  { x: 3, y: 15 }
                ]} />
              <LineMarkSeries
                className="linemark-series-example-2"
                curve={'curveMonotoneX'}
                data={[
                  { x: 1, y: 11 },
                  { x: 1.5, y: 29 },
                  { x: 3, y: 7 }
                ]} />
            </FlexibleXYPlot>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  image: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  humidity: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired,
  wind_speed: PropTypes.number.isRequired,
  wetness: PropTypes.number.isRequired
};

Home.defaultProps = {
  image: '../images/weather-rain-day.png',
  temperature: 33,
  humidity: 90,
  pressure: 42.23,
  wind_speed: 2.3,
  wetness: 1024
};

export default Home;