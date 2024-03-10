import BicycleModel from '../models/BicycleModel.js';

export const getAllBicycles = async (request, response) => {
    try {
        const bicycles = await BicycleModel.findAll();
        response.status(200).json(bicycles);
    } catch(error) {
        response.status(500).json({ message: error.message });
    }
}

export const deleteBicycleById = async (request, response) => {
    const { id } = request.params;
    try {
        const bicycle = await BicycleModel.findByPk(id);
        if (!bicycle) {
            return response.status(404).json({ message: "Bicycle not found" });
        }
        await bicycle.destroy();
        response.status(200).json({ message: "Bicycle deleted successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
