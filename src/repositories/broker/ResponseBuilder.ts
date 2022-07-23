import EmptyResponse from './EmptyResponse';
import WeatherResponse from './WeatherResponse';

abstract class ResponseBuilder {

    protected NAME: string = '';

    abstract buildWeatherResponse(data, city: string): WeatherResponse;

    getEmptyReponse(): WeatherResponse {
        return new EmptyResponse(this.NAME);
    }
}

export default ResponseBuilder;