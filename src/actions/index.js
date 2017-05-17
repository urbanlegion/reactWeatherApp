import axios from 'axios';
const API_KEY = "23bdbf6ed6fa1ffd32d735056f20108a";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&apikey=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  console.log('Request is : ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
