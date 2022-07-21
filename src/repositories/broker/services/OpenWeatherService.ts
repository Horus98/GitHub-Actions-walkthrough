import axios from 'axios';

class OpenWeatherService {

    API_KEY = 'dd8ba490e9faacb159ecc2648bd20148';

    async getCurrentWeather(cityName: string): Promise<any> {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&cnt=1&appid=${this.API_KEY}`);
    }
}

export default OpenWeatherService;