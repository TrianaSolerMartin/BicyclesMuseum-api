import require  from 'express';
import request from 'supertest';
import { app } from '../App.js'; 

const api = request(app); //request nos permite hacer solicitudes a la app

describe('Testing CRUD Posters', () => {

    test("Response body must be an array and then show 200 status", async()=>{
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true); //que objeto quiero recibir, modificar
        expect(response.status).toBe(200);
        });
    });

    test('Post response should be an object and return status 201', async() => {
        const response = await api.post('/api').send({
            "model": "Test",
            "speeds": 5,
            "frame": "test",
            "electric": false,
            "image": "test"
            });
            expect(typeof response.body).toBe("object");
            expect(response.status).toBe(201);
    })
