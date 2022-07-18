import WeatherBroker from './broker/WeatherBroker';
import { autoInjectable } from 'tsyringe';
import IWeatherResponse from './broker/IWeatherResponse';

@autoInjectable()
class WeatherRepository {

    broker: WeatherBroker;

    constructor(broker: WeatherBroker) {
        this.broker = broker;
    }

    getWeather(city: string): Promise<IWeatherResponse[]> {
        return this.broker.getWeatherResponses(city);
    };
}

export default WeatherRepository;