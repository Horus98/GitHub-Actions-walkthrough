import IProxy from './IProxy';
import IWeatherResponse from '../IWeatherResponse';
import AccuWeatherService from '../services/AccuWeatherService';
import AccuWeatherResponseBuilder from './AccuWeatherResponseBuilder';

import { injectable } from 'tsyringe';

@injectable()
class AccuWeatherProxy implements IProxy {
    service: AccuWeatherService;
    responseBuilder: AccuWeatherResponseBuilder;

    constructor(service: AccuWeatherService, responseBuilder: AccuWeatherResponseBuilder) {
        this.service = service;
        this.responseBuilder = responseBuilder;
    }

    async getWeatherResponse(): Promise<IWeatherResponse> {
        const response = await this.service.getCurrentWeather();
        return this.responseBuilder.buildWeatherResponse(response.data);
    }
}

export default AccuWeatherProxy;