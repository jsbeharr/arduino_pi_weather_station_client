import React from 'react';
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

const home = (props) => {

  const temperature = props.current_weather.temperature;
  const humidity = props.current_weather.humidity;
  const pressure = props.current_weather.pressure;
  const wind_speed = props.current_weather.wind_speed;
  const image = props.image;

  return (
    <div className="Home">
      <div className='Banner'>
        <p id='title' className='banner_header'>Arduino Pi Weather Station</p>
        <div id='weather_img_container'>
          <img src={image} alt='weather' />
        </div>
        <div id='location_time' className='banner_header'>
          <p>Ann Arbor, Michigan</p>
          <Clock format={'h:mm'} ticking={true} timezone={'US/Eastern'} />
        </div>
      </div>
      <div className='content'>
        <div id='WeatherBox' className='card'>
            <header>
              <p>{temperature}&deg;F</p>
              <p>{moment().format('dddd')}</p>
              <p>{moment().format('MMMM D, YYYY')}</p>
            </header>
            <p>Humidity: {humidity}%         </p>
            <p>Pressure: {pressure} Hg       </p>
            <p>Wind Speed: {wind_speed} m/s  </p>
        </div>
        <div id='DetailBox' className='card'>
            <FlexibleXYPlot>
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
};

export default home;