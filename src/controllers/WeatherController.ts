import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import WeatherRepository from '../repositories/WeatherRepository';

@autoInjectable()
class WeatherController {

    weatherRepository: WeatherRepository;

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    getWeather = async (_req: Request, res: Response) => {
        res.json({data: await this.weatherRepository.getWeather()});
    };
}

export default WeatherController;
