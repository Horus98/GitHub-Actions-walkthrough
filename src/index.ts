import 'reflect-metadata';
import { container } from 'tsyringe';
import express from 'express';
import WeatherRouter from './WeatherRouter';
import AccuWeatherProxy from './repositories/broker/proxies/accuWeather/AccuWeatherProxy';
import FreeWeatherAPIProxy from './repositories/broker/proxies/freeWeatherAPI/FreeWeatherAPIProxy';

const app = express();

const port = process.env.PORT || 4000;

container.register('Proxy', {useClass: AccuWeatherProxy});
container.register('Proxy', {useClass: FreeWeatherAPIProxy});

const weatherRouter = container.resolve(WeatherRouter);

app.use('/api', weatherRouter.getRouter());

const server = app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});

export default server;

