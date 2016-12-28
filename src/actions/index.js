import axios from 'axios';

const API_KEY = '981f466cb547b7dcfd7d39338579c4d5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},CA`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
