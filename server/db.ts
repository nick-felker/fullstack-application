import {Sequelize} from 'Sequelize';

export default new Sequelize(
    <string>process.env.DB_NAME,
    <string>process.env.DB_USER,
    <string>process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(<string>process.env.DB_PORT),
    }
)