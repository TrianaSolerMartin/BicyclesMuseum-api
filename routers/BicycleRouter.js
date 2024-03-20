import express from 'express';
import { createBicycle, deleteBicycle, getAllBicycles, getOneBicycle, updateBicycle } from '../controllers/BicycleController.js';
import { validateCreateBicycle, validateUpdateBicycle } from '../validators/bicycleValidator.js';

const router = express.Router();

router.get('/', getAllBicycles);

router.delete('/:id', deleteBicycle);

router.post('/', validateCreateBicycle, createBicycle);

<<<<<<< HEAD
router.put('/:id', bicycleValidator, updateBicycle);
=======
router.put('/:id', validateUpdateBicycle, updateBicycle);
>>>>>>> develop

router.get('/:id', getOneBicycle);

export default router;