import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

<<<<<<< HEAD
export const bicycleValidator = [
=======
export const validateCreateBicycle = [
>>>>>>> develop
    check('model')
        .exists()
        .notEmpty(),
    
    check('speeds')
        .exists()
        .notEmpty()
<<<<<<< HEAD
        .isInt({ min: 1, max: 33 }),
    
    check('frame') 
=======
        .isInt({ min: 1, max: 30 }).withMessage("The speeds must be between 1 and 30"),
    
    check('frame')
>>>>>>> develop
        .exists()
        .notEmpty(),
    
    check('electric')
        .exists()
        .notEmpty(),
    
    check('image')
        .exists()
        .notEmpty(), 
        
    (req, res, next) => {
        validateResult(req, res, next)
    } 
<<<<<<< HEAD
];
=======
];
>>>>>>> develop
