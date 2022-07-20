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
            sunrise: this.getHourFromIsoDate(data.DailyForecasts[0].Sun.Rise),
            sunset: this.getHourFromIsoDate(data.DailyForecasts[0].Sun.Set),
        };
    }

    getHourFromIsoDate(isoDate: string): string {
        const time = isoDate.split('T')[1].split(':');
        const hour = parseInt(time[0]);
        const minutes = time[1];
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hourFormatted = hour % 12 === 0 ? '12' : '0' + hour % 12;
        return hourFormatted + ':' + minutes + ' ' + ampm;
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
            sunrise: '',
            sunset: ''
        };
    }
}

export default AccuWeatherResponseBuilder;