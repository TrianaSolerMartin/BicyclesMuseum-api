import express from 'express';
import { getAllBicycles, deleteBicycle, createBicycle } from '../controllers/BicycleController.js';

const router = express.Router();

router.get('/', getAllBicycles);
router.delete('/:id', deleteBicycle);
router.post('/', createBicycle);

export default router;