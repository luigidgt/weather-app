const location = 'Buenos Aires,ar';
const api_key = 'e8ec3365fbae873e96b5d2a5a4669a74';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;