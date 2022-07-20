import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';
import WeatherRepository from '../repositories/WeatherRepository';

@autoInjectable()
class WeatherController {

    weatherRepository: WeatherRepository;

    constructor(weatherRepository: WeatherRepository) {
        this.weatherRepository = weatherRepository;
    }

    getWeather = async (req: Request, res: Response) => {
        const city = req.query.city;
        if(!city) {
            res.status(400).end();
            return;
        }
        res.json({data: await this.weatherRepository.getWeather(city.toString())});
    };
}

export default WeatherController;
