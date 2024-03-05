import BicycleModel from "../models/BicycleModel.js"

//get

export const getBicycles = async (request, response) => {

   try {
    const bicycles = await BicycleModel.findAll()
    response.status(200).json(bicycles);
   }
   catch(error){
    response.status(500).json({menssage: error.message})
   }
}