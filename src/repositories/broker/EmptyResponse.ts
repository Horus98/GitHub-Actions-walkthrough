import TemperatureResponse from './TemperatureResponse';
import WeatherResponse from './WeatherResponse';
import WindResponse from './WindResponse';

class EmptyResponse implements WeatherResponse {
    source: string;
    city: string = '';
    min_temperature: TemperatureResponse = {
        value: 0,
        unit: ''
    };
    max_temperature: TemperatureResponse = {
        value: 0,
        unit: ''
    };
    wind: WindResponse = {
        speed: 0,
        unit: '',
        degrees: 0
    };
    sunrise: string = '';
    sunset: string = '';

    constructor(source: string) {
        this.source = source;
    }
}

export default EmptyResponse;