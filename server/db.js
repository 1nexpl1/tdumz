const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'tdumz', // Название БД
    'postgres', // Пользователь
    'Theteda', // ПАРОЛЬ
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    }
)
