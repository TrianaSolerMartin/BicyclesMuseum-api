import express from 'express';
import { getAllBicycles } from '../controllers/BicycleController.js';

const app = express.Router();

app.get('/bicycles', getAllBicycles);
// router.delete('/bicycles/:id', deleteBicycleById);

export default app;