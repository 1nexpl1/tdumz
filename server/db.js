import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

// Загружаем переменные окружения из .env файла
dotenv.config();

const sequelize = new Sequelize(
    process.env.NAME, // Название БД
    process.env.USERNAME, // Пользователь
    process.env.PASSWORD, // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
);

export default sequelize;