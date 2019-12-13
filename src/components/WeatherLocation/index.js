import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  <div className="weatherLocationCont">
    <Location city={'Santiago'}></Location>
    <WeatherData></WeatherData>
  </div>
);

export default WeatherLocation;