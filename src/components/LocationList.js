import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const LocationList = ({ cities }) => {
  console.log(cities);
  
  return (
    <div>
      <WeatherLocation city="Buenos Aires,ar" />
      <WeatherLocation city="Bogota,col" />
      <WeatherLocation city="Washington,us" />
      <WeatherLocation city="Madrid,es" />
    </div>
  );
};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;