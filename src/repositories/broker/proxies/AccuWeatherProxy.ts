import IProxy from './IProxy';
import IWeatherResponse from '../IWeatherResponse';
import { injectable } from 'tsyringe';
import AccuWeatherService from '../services/AccuWeatherService';

@injectable()
class AccuWeatherProxy implements IProxy {
    service: AccuWeatherService;

    constructor(service: AccuWeatherService) {
        this.service = service;
    }

    async getWeatherResponse(): Promise<IWeatherResponse> {
        const response = await this.service.getCurrentWeather();
        return {source: this.service.getName(), country: response.data.LocalizedName};
    }
}

export default AccuWeatherProxy;