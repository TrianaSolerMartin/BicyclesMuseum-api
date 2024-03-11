import express from 'express';
import { PORT } from "./config.js";
import connection_db from "./database/connection_db.js";
import BicycleModel from "./models/BicycleModel.js";
import BicycleRouter from './routers/BicycleRouter.js';

const app = express();


// Rutas de la aplicación
app.use('/api', BicycleRouter);


// Autenticar la conexión
try {
  await connection_db.authenticate();
  console.log('❤️❤️❤️ Connection has been established successfully.');

  // Sincronizar el modelo BicycleModel con la base de datos
  await BicycleModel.sync();
  console.log('✅ BicycleModel has been synchronized with the database.');
} catch (error) {
  console.error('❌ Unable to connect to the database:', error);
}
app.listen(PORT, () => {
  console.log(`💚 Connected to port ${PORT}`);
}).on('error', (error) => {
  console.log('Error al iniciar el servidor:', error.message);
});



