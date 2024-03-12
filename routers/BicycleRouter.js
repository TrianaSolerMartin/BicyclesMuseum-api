import express from 'express';
import { createBicycle, deleteBicycle, getAllBicycles, updateBicycle } from '../controllers/BicycleController.js';
import { validateCreate } from '../validators/bicycleValidator.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.delete('/:id', deleteBicycle);

router.post('/', validateCreate, createBicycle);

router.put('/:id', updateBicycle);

export default router;