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
export const deleteBicycle = async (request, response) => {
        const {id} = request.params
    try {
        const bicycle = await BicycleModel.findByPk(id);
        if (!bicycle) {
            return response.status(404).json({ success: false, error: 'Bicicleta no encontrada' });
          }
            await bicycle.destroy();
      
          response.status(200).json({ success: true, message: 'Bicicleta eliminada con éxito' });
        } catch (error) {
          console.error('Error al eliminar bicicleta:', error);
          response.status(500).json({ success: false, error: 'Error interno del servidor' });
        }
}
export const createBicycle = async (request, response) => {
    try {
        const{model,speed,frame,electric,image} = request.body;
        const newBicycle = await BicycleModel.create({model,speed,frame,electric,image});

        response.status(201).json({ success: true, data: newBicycle, message: 'Bicicleta creada con éxito' });
        } catch (error) {
          console.error('Error al crear la bicicleta:', error);
          response.status(500).json({ success: false, error: 'Error interno del servidor' });
        }
}
export const updateBicycle = async (request, response) => {
    const {id} = request.params;
    const{model,speed,frame,electric,image} = request.body;

    try {
      const bicycle = await BicycleModel.findByPk(id);
      await bicycle.update({model,speed,frame,electric,image});

      response.status(200).json({ success: true, data: bicycle, message: 'Bicicleta actualizada con éxito'});
    
    } catch (error) {
      console.error('Error al crear la bicicleta:', error);
      response.status(500).json({ success: false, error: 'Error interno del servidor' });  
    }
}
