require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, SERVER_URL } = process.env;
const { Sequelize } = require("sequelize");

// const sequelize = new Sequelize(SERVER_URL, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: {
//       require: true, // Requiere una conexión SSL/TLS
//       rejectUnauthorized: false,
//     },
//   },
// });

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Bogdan-Andrei-Faur`,
  { logging: false, native: false }
);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
