import WeatherResponse from '../WeatherResponse';

interface Proxy {
    getWeatherResponse(city: string): Promise<WeatherResponse>;
}

export default Proxy;