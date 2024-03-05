import connection_db from "./database/connection_db.js";
import BicycleModel from "./models/BicycleModel.js";

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