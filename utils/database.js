const Sequelize = require('sequelize');
const { config } = require('dotenv');
const DB_NAME = config().parsed.DB_NAME;
const USER_NAME = config().parsed.USER_NAME;
const USER_PASSWORD = config().parsed.USER_PASSWORD;
const sequelize = new Sequelize(DB_NAME, USER_NAME, USER_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
