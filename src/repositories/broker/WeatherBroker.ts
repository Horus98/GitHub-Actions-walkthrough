import 'reflect-metadata';
import IWeatherResponse from './IWeatherResponse';
import IProxy from './proxies/IProxy';
import { injectable, injectAll } from 'tsyringe';

@injectable()
class WeatherBroker {

    proxies: IProxy[];

    constructor(@injectAll('Proxy') proxies: IProxy[]) {
        this.proxies = proxies;
    }

    async getWeatherResponses(): Promise<IWeatherResponse[]> {
        const responses: IWeatherResponse[] = [];
        for(const proxy of this.proxies){
            responses.push(await proxy.getWeatherResponse());
        }
        return responses;
    }
}

export default WeatherBroker;