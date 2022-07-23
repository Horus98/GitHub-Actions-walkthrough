import Proxy from '../Proxy';
import WeatherResponse from '../../WeatherResponse';
import FreeWeatherAPIService from '../../services/FreeWeatherAPIService';
import FreeWeatherAPIResponseBuilder from './FreeWeatherResponseBuilder';
import { injectable } from 'tsyringe';

@injectable()
class FreeWeatherAPIProxy implements Proxy {
    private service: FreeWeatherAPIService;
    private responseBuilder: FreeWeatherAPIResponseBuilder;

    constructor(service: FreeWeatherAPIService, responseBuilder: FreeWeatherAPIResponseBuilder) {
        this.service = service;
        this.responseBuilder = responseBuilder;
    }

    async getWeatherResponse(cityName: string): Promise<WeatherResponse> {
        try {
            const currentWeatherResponse = await this.service.getCurrentWeather(cityName);
            return this.responseBuilder.buildWeatherResponse(currentWeatherResponse.data, currentWeatherResponse.data.location.name);
        } catch (error) {
            return this.responseBuilder.getEmptyReponse();
        }
    }
}

export default FreeWeatherAPIProxy;