import { check } from 'express-validator';
import { validateResult } from '../helpers/validateHelper.js';

// Middleware de validación para la actualización de la bicicleta
export const updateBicycleValidator = [
    check('model')
        .optional()
        .notEmpty(),
    
    check('speed')
        .optional()
        .notEmpty()
        .isInt({ min: 1, max: 33 }),
    
    check('frame') 
        .optional()
        .notEmpty(),
    
    check('electric')
        .optional()
        .notEmpty()
        .isBoolean(),
    
    check('image')
        .optional()
        .notEmpty()
        .isURL(),
        
    (req, res, next) => {
        validateResult(req, res, next);
    } 
];

// Controlador para actualizar la bicicleta
export const updateBicycle = async (request, response) => {
    const { id } = request.params;
    const { model, speed, frame, electric, image } = request.body;

    try {
        const bicycle = await BicycleModel.findByPk(id);
        if (!bicycle) {
            return response.status(404).json({ success: false, message: 'Bicicleta no encontrada' });
        }

        // Actualiza solo los campos que se han proporcionado
        const updateData = {};
        if (model) updateData.model = model;
        if (speed) updateData.speed = speed;
        if (frame) updateData.frame = frame;
        if (electric) updateData.electric = electric;
        if (image) updateData.image = image;

        await bicycle.update(updateData);

        response.status(200).json({ success: true, data: bicycle, message: 'Bicicleta actualizada con éxito' });
    } catch (error) {
        console.error('Error al actualizar la bicicleta:', error);
        response.status(500).json({ success: false, error: 'Error interno del servidor' });
    }
};
