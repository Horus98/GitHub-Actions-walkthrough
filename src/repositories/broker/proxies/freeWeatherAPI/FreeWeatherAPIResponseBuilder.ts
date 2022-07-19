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
                value: data.forecast.forecastday[0].day.mintemp_c,
                unit: 'C'
            },
            max_temperature: {
                value: data.forecast.forecastday[0].day.maxtemp_c,
                unit: 'C'
            },
            wind: {
                speed: data.current.wind_kph,
                unit: 'km/h',
                degrees: data.current.wind_degree
            },
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
        };
    }
}

export default FreeWeatherAPIResponseBuilder;