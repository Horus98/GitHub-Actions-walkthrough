import IWeatherResponse from '../WeatherResponse';

interface IProxy {
    getWeatherResponse(city: string): Promise<IWeatherResponse>;
}

export default IProxy;