import { DataTypes } from 'sequelize';
import connection_db from '../database/connection_db.js';

const BicycleModel = connection_db.define('Bicycle', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
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
        type: DataTypes.STRING,
        allowNull: false
    } 
}, {
    tableName: 'bicycles',
    timestamps: false
});

export default BicycleModel;