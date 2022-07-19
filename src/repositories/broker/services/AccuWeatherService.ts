import axios from 'axios';

class AccuWeatherService {

    API_KEY = 'BWVnen3sLd3Oe5AlnmrwiMpnG1SfxxyA';

    async getCityCode(city: string): Promise<any> {
        return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${this.API_KEY}&q=${city}&language=en-us&details=true`);
    }

    async getCurrentWeather(cityCode: string): Promise<any> {
        return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityCode}?apikey=${this.API_KEY}&language=en-US&details=true&metric=true`);
    }
}

export default AccuWeatherService;