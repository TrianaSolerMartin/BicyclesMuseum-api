import BicycleModel from '../models/BicycleModel.js'

export const getAllBicycles = async (request, response) => {
    try {
        const bicycles = await BicycleModel.findAll();
        response.status(200).json(bicycles);
    }
    catch(error){
        response.status(500).json({message: error.message})
    }
}