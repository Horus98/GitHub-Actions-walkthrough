import WeatherResponse from '../../WeatherResponse';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class FreeWeatherAPIResponseBuilder {
    private NAME = 'Free Weather API';

    buildWeatherResponse(data, city: string): WeatherResponse {
        return {
            source: this.NAME,
            city: city,
            min_temperature: {
                value: 0,
                unit: ''
            },
            max_temperature: {
                value: 0,
                unit: ''
            },
            wind: {
                speed: 0,
                unit: '',
                degrees: 0
            },
            sunrise: '',
            sunset: '',
        };
    }
}

export default FreeWeatherAPIResponseBuilder;