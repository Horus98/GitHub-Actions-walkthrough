import IWeatherResponse from '../IWeatherResponse';
import { autoInjectable } from 'tsyringe';

@autoInjectable()
class AccuWeatherResponseBuilder {
    private NAME = 'AccuWeather';

    buildWeatherResponse(data): IWeatherResponse {
        return {
            source: this.NAME,
            city: 'string',
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
}

export default AccuWeatherResponseBuilder;