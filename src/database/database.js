import Sequelize from "sequelize"

export const sequelize = new Sequelize(
    'projectsdb',
    'postgres',
    'contrasena',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
); 