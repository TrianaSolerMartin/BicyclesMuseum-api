import express from 'express';
import { createBicycle, deleteBicycle, getAllBicycles, updateBicycle } from '../controllers/BicycleController.js';
import {bicycleValidator} from '../validators/bicycleValidator.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.delete('/:id', deleteBicycle);

router.post('/', bicycleValidator, createBicycle);

router.put('/:id', bicycleValidator, updateBicycle);

export default router;