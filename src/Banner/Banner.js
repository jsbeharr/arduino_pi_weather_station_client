import React from 'react';
import './Banner.css';
import Clock from 'react-live-clock'

const banner = (props) => {
  return (
    <div className='Banner'>
        <p id='title'>Arduino Pi Weather Station</p>
        <div className='weather_img'>
          <img src={props.image} alt='weather'/>
        </div>
        <div id='location_time'>
          <p>Ann Arbor, Michigan</p>
          <Clock format={'h:mm'} ticking={true} timezone={'US/Eastern'} />
        </div>
    </div>
  );
};

export default banner;