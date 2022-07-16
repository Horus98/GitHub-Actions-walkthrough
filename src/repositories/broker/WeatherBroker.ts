import IWeatherResponse from './IWeatherResponse';
import IProxy from './proxies/IProxy';
import {injectable, injectAll} from 'tsyringe';

@injectable()
class WeatherBroker {

    proxies: IProxy[];

    constructor(@injectAll('Proxy') proxies: IProxy[]) {
        this.proxies = proxies;
    }

    getWeatherResponses(): Promise<IWeatherResponse>[] {
        return this.proxies.map((proxy: IProxy) => proxy.getWeatherResponse());
    }
}

export default WeatherBroker;