import Proxy from '../Proxy';
import WeatherResponse from '../../WeatherResponse';
import AccuWeatherService from '../../services/AccuWeatherService';
import AccuWeatherResponseBuilder from './AccuWeatherResponseBuilder';
import { injectable } from 'tsyringe';

@injectable()
class AccuWeatherProxy implements Proxy {
    private service: AccuWeatherService;
    private responseBuilder: AccuWeatherResponseBuilder;

    constructor(service: AccuWeatherService, responseBuilder: AccuWeatherResponseBuilder) {
        this.service = service;
        this.responseBuilder = responseBuilder;
    }

    async getWeatherResponse(city: string): Promise<WeatherResponse> {
        try {
            const cityResponse = await this.service.getCityCode(city);
            const currentWetherResponse = await this.service.getCurrentWeather(cityResponse.data[0].Details.CanonicalLocationKey);
            return this.responseBuilder.buildWeatherResponse(currentWetherResponse.data, cityResponse.data[0].LocalizedName);
        } catch (error) {
            return this.responseBuilder.getEmptyReponse();
        }
    }
}

export default AccuWeatherProxy;