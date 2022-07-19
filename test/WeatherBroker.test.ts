import WeatherBroker from '../src/repositories/broker/WeatherBroker';

const mockWeatherResponse = {
    source: 'AccuWeather',
    city: 'Bahia Blanca',
    min_temperature: {
        value: 16.5,
        unit: 'C'
    },
    max_temperature: {
        value: 26.8,
        unit: 'C'
    },
    wind: {
        speed: 14.8,
        unit: 'km/h',
        degrees: 163
    },
    sunrise: 1658054100,
    sunset: 1658094960
};

test('Should return only one response', async () => {
    const mockedProxy =  { getWeatherResponse: jest.fn().mockResolvedValueOnce(mockWeatherResponse) };
    const broker = new WeatherBroker([mockedProxy]);

    const responses = await broker.getWeatherResponses('Bahia Blanca');

    expect(responses.length).toBe(1);
    expect(responses[0].source).toBe(mockWeatherResponse.source);
    expect(responses[0].city).toBe(mockWeatherResponse.city);
});

test('Should zero responses', async () => {
    const broker = new WeatherBroker([]);
    expect((await broker.getWeatherResponses('')).length).toBe(0);
});