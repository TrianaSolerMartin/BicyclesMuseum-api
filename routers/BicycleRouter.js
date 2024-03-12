import express from 'express';
import { getAllBicycles, deleteBicycle, createBicycle, updateBicycle } from '../controllers/BicycleController.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.delete('/:id', deleteBicycle);

router.post('/', createBicycle);

router.put('/:id', updateBicycle)

export default router;