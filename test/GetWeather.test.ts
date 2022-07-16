import app from '../src/index';
import request from 'supertest';
import AccuWeatherService from '../src/repositories/broker/services/AccuWeatherService';

test('Check response format', async () => {
    const response = await request(app).get('/api');
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
    response.body.data.forEach(element => {
        expect(element.source).toBeDefined();
    });
});

test('Test AccuWeatherService', async () => {
    const service = new AccuWeatherService();
    console.log((await service.getCurrentWeather()).data);
});

afterAll(() => {
    app.close();
});