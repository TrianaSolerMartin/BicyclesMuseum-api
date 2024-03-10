import express from 'express';
import { getAllBicycles } from '../controllers/BicycleController.js';
// import { eliminarRegistro } from '../controllers/BicycleController.js';

const app = express.Router();

router.get('/', getAllBicycles);


// router.delete('/api/:id', eliminarRegistro);

export default router;
