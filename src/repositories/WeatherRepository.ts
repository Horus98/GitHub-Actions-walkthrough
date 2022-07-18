import WeatherBroker from './broker/WeatherBroker';
import WeatherResponse from './broker/WeatherResponse';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class WeatherRepository {

    broker: WeatherBroker;

    constructor(broker: WeatherBroker) {
        this.broker = broker;
    }

    getWeather(city: string): Promise<WeatherResponse[]> {
        return this.broker.getWeatherResponses(city);
    };
}

export default WeatherRepository;