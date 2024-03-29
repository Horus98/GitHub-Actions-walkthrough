import Proxy from '../Proxy';
import WeatherResponse from '../../WeatherResponse';
import OpenWeatherService from '../../services/OpenWeatherService';
import OpenWeatherResponseBuilder from './OpenWeatherResponseBuilder';
import { injectable } from 'tsyringe';

@injectable()
class OpenWeatherProxy implements Proxy {
    private service: OpenWeatherService;
    private responseBuilder: OpenWeatherResponseBuilder;

    constructor(service: OpenWeatherService, responseBuilder: OpenWeatherResponseBuilder) {
        this.service = service;
        this.responseBuilder = responseBuilder;
    }

    async getWeatherResponse(cityName: string): Promise<WeatherResponse> {
        try {
            const currentWetherResponse = await this.service.getCurrentWeather(cityName);
            return this.responseBuilder.buildWeatherResponse(currentWetherResponse.data, currentWetherResponse.data.city.name);
        } catch (error) {
            return this.responseBuilder.getEmptyReponse();
        }
    }
}

export default OpenWeatherProxy;
