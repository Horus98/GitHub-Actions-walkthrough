import WeatherBroker from './broker/WeatherBroker';
import { autoInjectable } from 'tsyringe';
import IWeatherResponse from './broker/IWeatherResponse';

@autoInjectable()
class WeatherRepository {

    broker: WeatherBroker;

    constructor(broker: WeatherBroker) {
        this.broker = broker;
    }

    getWeather(): Promise<IWeatherResponse[]> {
        return this.broker.getWeatherResponses();
    };
}

export default WeatherRepository;