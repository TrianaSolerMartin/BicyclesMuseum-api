import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

export const bicycleValidator = [
    check('model')
        .exists()
        .notEmpty(),
    
    check('speeds')
        .exists()
        .notEmpty()
        .isInt({ min: 1, max: 33 }),
    
    check('frame') 
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
];
