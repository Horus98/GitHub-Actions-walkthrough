import Proxy from '../Proxy';
import WeatherResponse from '../../WeatherResponse';
import FreeWeatherAPIService from '../../services/FreeWeatherAPIService';
import FreeWeatherAPIResponseBuilder from './FreeWeatherAPIResponseBuilder';
import { injectable } from 'tsyringe';

@injectable()
class FreeWeatherAPIProxy implements Proxy {
    service: FreeWeatherAPIService;
    responseBuilder: FreeWeatherAPIResponseBuilder;

    constructor(service: FreeWeatherAPIService, responseBuilder: FreeWeatherAPIResponseBuilder) {
        this.service = service;
        this.responseBuilder = responseBuilder;
    }

    async getWeatherResponse(cityName: string): Promise<WeatherResponse> {
        try {
            const currentWetherResponse = await this.service.getCurrentWeather(cityName);
            return this.responseBuilder.buildWeatherResponse(currentWetherResponse.data);
        } catch (error) {
            return this.responseBuilder.getEmptyReponse();
        }
    }
}

export default FreeWeatherAPIProxy;