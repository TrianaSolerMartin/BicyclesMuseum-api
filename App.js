import connection_db from "./database/connection_db.js";
import BicycleModel from "./models/BicycleModel.js";
import  {PORT} from "./config.js"
import express  from "express";
import BicycleRouter from "./routers/BicycleRouter.js"

const app = express();
app.use("/api", BicycleRouter )

try {
  await connection_db.authenticate();
  console.log("wE ARE IN CONECTION");
} catch (error) {
  console.error('oh oh oh...  we have a problem', error);
}

app.listen(PORT, () => 
  console.log(`server up in http://localhost:${PORT}`),
);

// Función para sincronizar el modelo con la base de datos
const syncModelWithDatabase = async () => {
  try {
    // Autenticar la conexión a la base de datos
    await connection_db.authenticate();
    console.log('❤ Connection has been established successfully.');

    // Sincronizar el modelo con la base de datos
    await BicycleModel.sync(); // Puedes usar alter: true para que Sequelize haga cambios en la tabla si es necesario

    console.log('✨ BicycleModel synchronized successfully.');
  } catch (error) {
    console.error('❌ Unable to sync BicycleModel with the database:', error);
  }
};

// Llamar a la función para sincronizar el modelo con la base de datos
syncModelWithDatabase();