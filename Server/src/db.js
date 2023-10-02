require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Bogdan-Andrei-Faur`,
    {logging: false,
    native: false}
)

module.exports = {
    ...sequelize.models,
    conn: sequelize,
}