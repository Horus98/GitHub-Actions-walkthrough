import ITemperatureResponse from './ITemperatureResponse';
import IWindResponse from './IWindResponse';

interface IWeatherResponse {
    source: string,
    city: string
    min_temperature: ITemperatureResponse,
    max_temperature: ITemperatureResponse,
    wind: IWindResponse,
    sunrise: 'string',
    sunset: 'string',
}

export default IWeatherResponse;