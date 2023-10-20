const { Sequelize } = require('sequelize');

const {
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_PASSWORD
} = process.env;

const sequelize = new Sequelize(
  'users',
  DB_NAME,
  DB_PASSWORD,
  {
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres'
  }
);

module.exports = sequelize;
