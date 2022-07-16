import { Request, Response } from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class WeatherController {
    getWeather(req: Request, res: Response) {
        res.json({title: 'Hello'});
    }
}

export default WeatherController;
