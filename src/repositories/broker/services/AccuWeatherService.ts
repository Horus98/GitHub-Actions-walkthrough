import axios from 'axios';

class AccuWeatherService {

    API_KEY = 'Vpxn597i5RRSyJl4cInNuoLqHQpBLS4U';

    getCurrentWeather(): Promise<any> {
        return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/2931?apikey=${this.API_KEY}&language=en-US&details=true&metric=true`);
    }
}

export default AccuWeatherService;