import IWeatherResponse from './IWeatherResponse';
import IProxy from './proxies/IProxy';
import {injectable, injectAll} from 'tsyringe';

@injectable()
class WeatherBroker {

    proxies: IProxy[];

    constructor(@injectAll('ValueClass') proxies: IProxy[]) {
        this.proxies = proxies;
    }

    getWeatherResponses(): IWeatherResponse[] {
        return [{source: ''}];
    }
}

export default WeatherBroker;