import  request  from "supertest";
import {app} from '../App'

const api = request(app);

describe('Testing crud bicycle', () =>{

    test('testeando', async() =>{

        const response = await api.get('/api');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.status).toBe(200)
    })
        test('Should create bicycle', async () =>{
        const response =  await api.post('/api').send({
                 "model": "test",
                 "speeds": "2",
                 "frame": "test",
                 "electric": "0",
                 "image": "www.wikipedis.com"
           })
        expect(typeof response.body).toBe('object');
        expect(response.status).toBe(201)
    })
})