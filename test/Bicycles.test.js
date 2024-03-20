<<<<<<< HEAD
import request from "supertest";
import { app } from '../App.js';
=======
import require  from 'express';
import request from 'supertest';
import { app, server } from '../App.js'; 
import connection_db from '../database/connection_db.js';
import BicycleModel from '../models/BicycleModel.js';
>>>>>>> develop

const api = request(app);

describe('Testing CRUD bicycle', () => {

    test('GET /api', async () => {
        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200);
    });

    test('POST /api', async () => {
        const response = await api.post('/api').send({
<<<<<<< HEAD
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
=======
                "model": "Test",
                "speeds": "5",
                "frame": "test",
                "electric": "1",
                "image": "www.test.com"
            });
            expect(typeof response.body).toBe("object");
            expect(response.status).toBe(201);
    })

    describe('DELETE ', () =>{
        let createdBicycle = {};
        let response;
        beforeEach(async () => {
            createdBicycle = await BicycleModel.create({ 
                "model": "Test",
                "speeds": "5",
                "frame": "test",
                "electric": "1",
                "image": "www.test.com"
            });

            response = await request(app).delete(`/api/${createdBicycle.id}`).send();
        });

        test('should return a response with status 200 and type json', () => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        // test('should return a message bicycle deleted successfully', async () => {
        //     expect(response.body.message).toContain("Bicycle has been delete successfully!");
        //     const findBicycle = await BicycleModel.findOne({where:{ id: createdBicycle.id}});
        //     expect(findBicycle).toBeNull();
        // })

        afterAll(async() =>{
            await BicycleModel.destroy({where:{ id: createdBicycle.id}})
        })
    })

    afterAll( () => {
        connection_db.close();
        server.close();
    });
})
>>>>>>> develop
