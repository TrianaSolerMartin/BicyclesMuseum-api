import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js'; 

const BicycleModel = connection_db.define('BicycleModel', {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    unique: true,
    allowNull: false // El id no puede ser nulo
  },
  model: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  speed: {
    type: DataTypes.INTEGER
  },
  frame: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  electric: {
    type: DataTypes.BOOLEAN
  },
  image: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'bicycles' // Opciones adicionales del modelo
});

export default BicycleModel;