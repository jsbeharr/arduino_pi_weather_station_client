import React from 'react';
import './Banner.css';
import Clock from 'react-live-clock'

const banner = (props) => {
  return (
    <div className='Banner'>
      <div className='header'>
        <p id='title'>Arduino Pi Weather Station</p>
        <div id='location_time'>
          <p>Ann Arbor, Michigan</p>
          <Clock format={'h:mm'} ticking={true} timezone={'US/Eastern'} />
        </div>
      </div>
      <img id='weather_img' src={props.image} alt='weather'/>
    </div>
  );
};

export default banner;