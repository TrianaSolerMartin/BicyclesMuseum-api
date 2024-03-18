import express from 'express';
import { getAllBicycles } from '../controllers/BicycleController.js';

const router = express.Router();

router.get('/', getAllBicycles)

export default router;