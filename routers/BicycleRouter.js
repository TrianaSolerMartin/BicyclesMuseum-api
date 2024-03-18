import express from 'express';
import { createBicycle, deleteBicycle, getAllBicycles, getOneBicycle, updateBicycle } from '../controllers/BicycleController.js';
import { validateCreateBicycle } from '../validators/bicycleValidator.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.delete('/:id', deleteBicycle);

router.post('/', validateCreateBicycle, createBicycle);

router.put('/:id', updateBicycle);

router.get('/:id', getOneBicycle);

export default router;