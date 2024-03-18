import express from 'express';
import { createBicycle, deleteBicycle, getAllBicycles, updateBicycle } from '../controllers/BicycleController.js';
// import { validateCreateBicycle } from '../validators/bicycleValidator.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.delete('/:id', deleteBicycle);

router.post('/', createBicycle);

router.put('/:id', bicycleValidator, updateBicycle);

export default router;