import connection_db from "./database/connection_db.js";
import BicycleModel from "./models/BicycleModel.js";
import express from 'express';
import { PORT } from "./config.js";
import BicycleRouter from './routers/BicycleRouter.js'


const app = express();

app.use('/api', BicycleRouter)

try {
  // Autenticar la conexión
  await connection_db.authenticate();
  console.log('❤️❤️❤️ Connection has been established successfully.');

  // Sincronizar el modelo BicycleModel con la base de datos
  await BicycleModel.sync();
  console.log('✅ BicycleModel has been synchronized with the database.');

} catch (error) {
  console.error('❌ Unable to connect to the database:', error);
}

app.listen(PORT, () => {
  console.log(`Server up in http://localhost:${PORT}/api`);
});



