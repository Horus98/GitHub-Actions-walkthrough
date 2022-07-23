import WeatherResponse from '../../WeatherResponse';
import { autoInjectable } from 'tsyringe';
import ResponseBuilder from '../../ResponseBuilder';

@autoInjectable()
class AccuWeatherResponseBuilder extends ResponseBuilder {
    protected NAME = 'AccuWeather API';

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

    private getHourFromIsoDate(isoDate: string): string {
        const time = isoDate.split('T')[1].split(':');
        const hour = parseInt(time[0]);
        const minutes = time[1];
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hourFormatted = this.getHoursFormatted(hour);
        return hourFormatted + ':' + minutes + ' ' + ampm;
    }

    private getHoursFormatted(hour: number): string {
        const hourMod = hour % 12;
        const hourWithZeroPad = hourMod < 10 ? '0' + hourMod : '' + hourMod;
        return hourMod === 0 ? '12' : hourWithZeroPad;
    }
}

export default AccuWeatherResponseBuilder;