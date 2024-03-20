import request from "supertest";
import { app } from '../App.js';

const api = request(app);

describe('Testing CRUD bicycle', () => {

    test('GET /api', async () => {
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200);
    });

    test('POST /api', async () => {
        const response = await api.post('/api').send({
            "model": "test",
            "speed": "2",
            "frame": "test",
            "electric": "0",
            "image": "www.wikipedia.com"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201);
    });

    test('GETONE /api/:id', async () => {
        const response = await api.get('/api/2'); 
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(200);
    });

    test('PUT /api/:id', async () => {
        const response = await api.put('/api/3').send({
            "model": "updatedTest",
            "speed": 3,
            "frame": "updatedTest",
            "electric": false,
            "image": "www.updatedwikipedia.com"
        });
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(200);
    });

    test('DELETE /api/id', async () => {
        const response = await api.delete('/api/id'); 
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(200);
    });

});
