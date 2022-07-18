import IWeatherResponse from '../IWeatherResponse';

interface IProxy {
    getWeatherResponse(city: string): Promise<IWeatherResponse>;
}

export default IProxy;