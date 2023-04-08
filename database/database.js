const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  process.env.db_name,
  process.env.db_user,
  process.env.db_pass,
  {
    host: "172.20.192.1",
    dialect: "mysql",
    timezone: "-03:00",
  }
);

module.exports = connection;