import IWeatherResponse from '../IWeatherResponse';

interface IProxy {
    getWeatherResponse(): IWeatherResponse;
}

export default IProxy;