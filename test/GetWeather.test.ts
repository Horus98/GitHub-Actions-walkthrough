import app from '../src/index';
import request from 'supertest';

test('Check response format', async () => {
    const response = await request(app).get('/api').query({ city: 'Bahia Blanca' });
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
    response.body.data.forEach(element => {
        checkWeatherResponseFormat(element);
    });
});

afterAll(() => {
    app.close();
});

function checkWeatherResponseFormat(element) {
    expect(element.source).toBeDefined();
    expect(typeof element.source).toBe('string');
    expect(element.city).toBeDefined();
    expect(typeof element.city).toBe('string');
    expect(element.min_temperature).toBeDefined();
    checkTemperatureResponseFormat(element.min_temperature);
    expect(element.max_temperature).toBeDefined();
    checkTemperatureResponseFormat(element.max_temperature);
    checkWindResponseFormat(element);
}

function checkWindResponseFormat(element) {
    expect(element.wind).toBeDefined();
    expect(element.wind).toBeInstanceOf(Object);
    expect(element.wind.speed).toBeDefined();
    expect(typeof element.wind.speed).toBe('number');
    expect(element.wind.unit).toBeDefined();
    expect(typeof element.wind.unit).toBe('string');
    expect(element.wind.degrees).toBeDefined();
    expect(typeof element.wind.degrees).toBe('number');
}

function checkTemperatureResponseFormat(temperatureResponse) {
    expect(temperatureResponse).toBeInstanceOf(Object);
    expect(temperatureResponse.value).toBeDefined();
    expect(typeof temperatureResponse.value).toBe('number');
    expect(temperatureResponse.unit).toBeDefined();
    expect(typeof temperatureResponse.unit).toBe('string');
}

function checkTimeResponseFormat(element) {
    expect(element.sunrise).toBeDefined();
    expect(typeof element.sunrise).toBe('string');
    expect(element.sunset).toBeDefined();
    expect(typeof element.sunset).toBe('string');
    expect(validTime(element.sunset)).toBeTruthy();
    expect(validTime(element.sunrise)).toBeTruthy();
}

function validTime (time: string) {
    return true;
}
