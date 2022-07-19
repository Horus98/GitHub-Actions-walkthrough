import TemperatureResponse from './TemperatureResponse';
import WindResponse from './WindResponse';

interface WeatherResponse {
    source: string,
    city: string
    min_temperature: TemperatureResponse,
    max_temperature: TemperatureResponse,
    wind: WindResponse,
    sunrise: string,
    sunset: string,
}

export default WeatherResponse;