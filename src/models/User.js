import { DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";
import {Task} from './Task.js'

export const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    phoneNumber: {
        type: DataTypes.STRING
    }
}); 

User.hasMany(Task, {
    foreignKey: 'userId',
    sourceKey: 'id'

})

Task.belongsTo(User,{
    foreignKey: 'userId',
    targetId:'id'
})