import { Sequelize } from "sequelize";
import config from '../config.js';

// Crear conexión a la base de datos utilizando las variables de entorno
const connection_db = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
    host: config.dbHost,
    dialect: config.dbDialect
});

export default connection_db; 