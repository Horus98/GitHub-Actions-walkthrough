import { Router } from 'express';
import  WeatherController  from './controllers/WeatherController';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class WeatherRouter {
    router: Router;

    constructor(weatherController: WeatherController) {
        this.router = Router();
        this.router.get('/', weatherController.getWeather);
    }

    getRouter() {
        return this.router;
    }
}

export default WeatherRouter;