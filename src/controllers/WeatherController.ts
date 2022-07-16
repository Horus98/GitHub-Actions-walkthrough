import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import WeatherRepository from '../repositories/WeatherRepository';

@autoInjectable()
class WeatherController {

    weatherRepository: WeatherRepository;

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    getWeather = (req: Request, res: Response) =>{
        res.json({data: this.weatherRepository.getWeather()});
    };
}

export default WeatherController;
