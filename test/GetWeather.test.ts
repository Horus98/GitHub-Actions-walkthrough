import app from '../src/index';
import request from 'supertest';

test('Check response format', async () => {
    const response = await request(app).get('/api').query({ city: 'Bahia Blanca' });
    expect(response.status).toBe(200);
    expect(response.body.data).toBeDefined();
    expect(response.body.data.length).toBeGreaterThan(0);
    response.body.data.forEach(element => {
        expect(element.source).toBeDefined();
    });
});

afterAll(() => {
    app.close();
});