import WeatherResponse from '../../WeatherResponse';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class AccuWeatherResponseBuilder {
    private NAME = 'AccuWeather';

    buildWeatherResponse(data, city: string): WeatherResponse {
        return {
            source: this.NAME,
            city: city,
            min_temperature: {
                value: data.DailyForecasts[0].Temperature.Minimum.Value,
                unit: data.DailyForecasts[0].Temperature.Minimum.Unit
            },
            max_temperature: {
                value: data.DailyForecasts[0].Temperature.Maximum.Value,
                unit: data.DailyForecasts[0].Temperature.Maximum.Unit
            },
            wind: {
                speed: data.DailyForecasts[0].Day.Wind.Speed.Value,
                unit: data.DailyForecasts[0].Day.Wind.Speed.Unit,
                degrees: data.DailyForecasts[0].Day.Wind.Direction.Degrees
            },
            sunrise: data.DailyForecasts[0].Sun.EpochRise,
            sunset: data.DailyForecasts[0].Sun.EpochSet,
        };
    }

    getEmptyReponse(): WeatherResponse {
        return {
            source: this.NAME,
            city: '',
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
            sunrise: -1,
            sunset: -1
        };
    }
}

export default AccuWeatherResponseBuilder;