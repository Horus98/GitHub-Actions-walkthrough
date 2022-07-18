import 'reflect-metadata';
import WeatherResponse from './WeatherResponse';
import IProxy from './proxies/IProxy';
import { injectable, injectAll } from 'tsyringe';

@injectable()
class WeatherBroker {

    proxies: IProxy[];

    constructor(@injectAll('Proxy') proxies: IProxy[]) {
        this.proxies = proxies;
    }

    async getWeatherResponses(city: string): Promise<WeatherResponse[]> {
        const responses: WeatherResponse[] = [];
        for(const proxy of this.proxies){
            responses.push(await proxy.getWeatherResponse(city));
        }
        return responses;
    }
}

export default WeatherBroker;