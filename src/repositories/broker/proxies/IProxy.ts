import IWeatherResponse from '../IWeatherResponse';

interface IProxy {
    getWeatherResponse(): Promise<IWeatherResponse>;
}

export default IProxy;