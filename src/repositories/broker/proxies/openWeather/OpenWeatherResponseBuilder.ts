import WeatherResponse from '../../WeatherResponse';
import { autoInjectable } from 'tsyringe';
import EmptyResponse from '../../EmptyResponse';

@autoInjectable()
class OpenWeatherResponseBuilder {
    private NAME = 'Open Weather API';

    buildWeatherResponse(data): WeatherResponse {
        console.log(data.list[0].main.temp_max);
        return {
            source: this.NAME,
            city: data.city.name,
            min_temperature: {
                value: data.list[0].main.temp_min,
                unit: 'C'
            },
            max_temperature: {
                value: data.list[0].main.temp_max,
                unit: 'C'
            },
            wind: {
                speed: data.list[0].wind.speed,
                unit: 'km/h',
                degrees: data.list[0].wind.deg
            },
            sunrise: this.formatDate(data.city.sunrise, data.city.timezone),
            sunset: this.formatDate(data.city.sunset, data.city.timezone),
        };
    }

    getEmptyReponse(): WeatherResponse {
        return new EmptyResponse(this.NAME);
    }

    private formatDate(date: number, timeZone: number) {
        let isoDate = new Date((date + timeZone) * 1000).toISOString();
        const time = isoDate.split('T')[1].split(':');
        const hour = parseInt(time[0]);
        const minutes = time[1];
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const hourFormatted = this.formatToTwelveConvention(hour);
        return hourFormatted + ':' + minutes + ' ' + ampm;
    }

    private formatToTwelveConvention(hour: number): string {
        const hourMod = hour % 12;
        const hourWithZeroPad = hourMod < 10 ? '0' + hourMod : '' + hourMod;
        return hourMod === 0 ? '12' : hourWithZeroPad;
    }
}

export default OpenWeatherResponseBuilder;