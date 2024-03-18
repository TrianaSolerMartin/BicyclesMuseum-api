import require  from 'express';
import request from 'supertest';
import { app, server } from '../App.js'; 
import connection_db from '../database/connection_db.js';

const api = request(app); //request nos permite hacer solicitudes a la app

describe('Testing CRUD Bicycles', () => {

    test("Response body must be an array and then show 200 status", async()=>{
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true); //que objeto quiero recibir, modificar
        expect(response.status).toBe(200);
    });

    test('Post response should be an object and return status 201', async() => {
        const response = await api.post('/api').send({
            "model": "Test",
            "speeds": "5",
            "frame": "test",
            "electric": "1",
            "image": "www.wikipedia.com"
            });
            expect(typeof response.body).toBe("object");
            expect(response.status).toBe(201);
    })

    afterAll( () => {
        connection_db.close();
        server.close();
    });
})
