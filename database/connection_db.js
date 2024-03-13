import { Sequelize } from "sequelize";
import {DB_DEV_NAME, DB_DEV_USER, DB_PASSWORD} from '../config.js';

// Crear conexión a la base de datos utilizando las variables de entorno
const connection_db = new Sequelize(DB_DEV_NAME, DB_DEV_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: "mysql"
});

export default connection_db; 