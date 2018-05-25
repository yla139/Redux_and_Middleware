import axios from 'axios';

const API_KEY = '8c61801365c45fac2e394e6caf86eff9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; //es6 syntax

export const FETCH_WEATHER = 'FETCH_WEATHER'

// action creater
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // return action with type
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}