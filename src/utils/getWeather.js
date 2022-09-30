
const BASE_URL = 'https://weather-proxy.freecodecamp.rocks';
const PATH = 'api/current';

export const getWeather = async (coords) => {
    return fetch(`${BASE_URL}/${PATH}?lat=${coords.lat}&lon=${coords.lon}`).then(response => response.json()).then(weather => weather).catch(error => error)
}