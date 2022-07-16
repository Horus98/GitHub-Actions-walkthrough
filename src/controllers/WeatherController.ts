import express from 'express';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class WeatherController {
    getWeather(req: express.Request, res: express.Response) {
        res.json({title: 'Hello'});
    }
}

export default WeatherController;
