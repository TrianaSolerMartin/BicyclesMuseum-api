import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js'; 

const Bicycle = connection_db.define('Bicycle', {
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
});

export default Bicycle;