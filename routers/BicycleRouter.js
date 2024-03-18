import express from 'express';
import { createBicycle, deleteBicycle, getAllBicycles, updateBicycle, getOneBicycle } from '../controllers/BicycleController.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.get('/:id', getOneBicycle);

router.delete('/:id', deleteBicycle);

router.post('/', createBicycle);

router.put('/:id', updateBicycle);

export default router;
