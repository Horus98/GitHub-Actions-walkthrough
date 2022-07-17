import WeatherBroker from '../src/repositories/broker/WeatherBroker';

test('Should return only one response', async () => {
    const mockWeatherResponse = {
        source: 'AccuWeather',
        country: 'Argentina'
    };
    const mockedProxy =  { getWeatherResponse: jest.fn().mockResolvedValueOnce(mockWeatherResponse) };
    const broker = new WeatherBroker([mockedProxy]);

    const responses = await broker.getWeatherResponses();

    expect(responses.length).toBe(1);
    expect(responses[0].source).toBe(mockWeatherResponse.source);
    expect(responses[0].country).toBe(mockWeatherResponse.country);
});

test('Should zero responses', async () => {
    const broker = new WeatherBroker([]);
    expect((await broker.getWeatherResponses()).length).toBe(0);
});