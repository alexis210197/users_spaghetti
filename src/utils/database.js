const {Sequelize} = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'usersEntregable',
    username: 'postgres',
    password:'csir1913',
    port: 5432
})

module.exports = db

