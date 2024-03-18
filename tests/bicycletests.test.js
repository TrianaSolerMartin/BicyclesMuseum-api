import request from 'supertest';
import express from 'express';
import { getAllBicycles } from '../controllers/BicycleController.js';

// Crear una instancia de Express para usar en las pruebas
const app = express();

// Usar el controlador getAllBicycles como middleware en una ruta de prueba
app.get('/', getAllBicycles);

describe('GET /api', () => {
 it('debería devolver un array de bicicletas', async () => {
    // Simular una solicitud GET a la ruta '/'
    const response = await request(app).get('/api');

    // Verificar que el estado de la respuesta es 200
    expect(response.status).toBe(200);

    // Verificar que el cuerpo de la respuesta es un array
    expect(Array.isArray(response.body)).toBe(true);

    // Se pueden agregar más verificaciones específicas sobre los datos devueltos
 });

 it('debería manejar errores internos del servidor', async () => {
    // Aquí necesitarías simular un error en la función getAllBicycles
    // Esto podría implicar modificar temporalmente la función para que lance un error
    // o usar un mock para simular el comportamiento de BicycleModel.findAll()

    // Simular una solicitud GET a la ruta '/'
    const response = await request(app).get('/api');

    // Verificar que el estado de la respuesta es 500
    expect(response.status).toBe(500);

    // Verificar que el cuerpo de la respuesta contiene un mensaje de error
    expect(response.body).toHaveProperty('message');
 });
});
