import TemperatureResponse from './TemperatureResponse';
import WindResponse from './WindResponse';

interface WeatherResponse {
    source: string,
    city: string
    min_temperature: TemperatureResponse,
    max_temperature: TemperatureResponse,
    wind: WindResponse,
    sunrise: Number,
    sunset: Number,
}

export default WeatherResponse;