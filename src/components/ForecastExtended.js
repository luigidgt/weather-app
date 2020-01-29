import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

// const days = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Jueves',
//   'Viernes',
// ]

// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal',
// }

const api_key = 'e8ec3365fbae873e96b5d2a5a4669a74';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null,
    }
  }

  componentDidMount() {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

    fetch(url_forecast).then(
      data => (data.json())
    ).then(
      weather_data => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        this.setState({ forecastData });
      }
    );
  }

  renderForecastItemDays() {
    return 'Render items';
    // return days.map(day => 
    //   <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>
    // );
  }

  renderProgress = () => {
    return 'Cargando pronóstico extendido';
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;

    return (
      <div>
        <h2 className='forecast-title'>Pronóstico Extendido para {city}</h2>
        {
          forecastData ?
          this.renderForecastItemDays():
          this.renderProgress()
        }
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}

export default ForecastExtended;