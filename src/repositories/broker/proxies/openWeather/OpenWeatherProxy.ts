import Proxy from '../Proxy';
import WeatherResponse from '../../WeatherResponse';
import OpenWeatherService from '../../services/OpenWeatherService';
import OpenWeatherResponseBuilder from './OpenWeatherResponseBuilder';
import { injectable } from 'tsyringe';

@injectable()
class OpenWeatherProxy implements Proxy {
    service: OpenWeatherService;
    responseBuilder: OpenWeatherResponseBuilder;

    constructor(service: OpenWeatherService, responseBuilder: OpenWeatherResponseBuilder) {
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

export default OpenWeatherProxy;
