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

export const eliminarRegistro = (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM tu_tabla WHERE id = ?';
    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.error('Error al eliminar el registro:', err);
        res.status(500).json({ error: 'Error interno del servidor' });
        return;
      }
  
      if (result.affectedRows > 0) {
        res.json({ mensaje: 'Registro eliminado correctamente' });
      } else {
        res.status(404).json({ error: 'No se encontró el registro con el ID proporcionado' });
      }
    });
  };
  
  process.on('SIGINT', () => {
    connection.end();
  });
  
  
  

