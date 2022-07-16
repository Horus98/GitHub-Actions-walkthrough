import WeatherBroker from './broker/WeatherBroker';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class WeatherRepository {

    broker: WeatherBroker;

    constructor(broker: WeatherBroker) {
        this.broker = broker;
    }

    public getWeather() {
        console.log('repository');
        return this.broker.getWeatherResponses();
    };
}

export default WeatherRepository;