import IProxy from './IProxy';
import IWeatherResponse from '../IWeatherResponse';
import { injectable, registry } from 'tsyringe';
import AccuWeatherService from '../services/AccuWeatherService';

@injectable()
@registry([{ token: 'ValueClass', useClass: AccuWeatherProxy }])
class AccuWeatherProxy implements IProxy {
    service: AccuWeatherService;

    constructor(service: AccuWeatherService) {
        this.service = service;
    }

    getWeatherResponse(): IWeatherResponse {
        const serviceResponse = this.service.getCurrentWeather();
        return {source: 'AccuWeather'};
    }
}

export default AccuWeatherProxy;