import axios from 'axios';

class FreeWeatherAPIService {

    API_KEY = 'b4067c5cbc3b4b119ce222559222606';

    async getCurrentWeather(cityName: string): Promise<any> {
        return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${this.API_KEY}&q=${cityName}&days=1&alerts=no&aqi=no`);
    }
}

export default FreeWeatherAPIService;