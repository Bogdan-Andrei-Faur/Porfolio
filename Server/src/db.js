require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { Sequelize } = require("sequelize");
const ContactModel = require("./Models/contact.js");

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Bogdan-Andrei-Faur`,
    {logging: false,
    native: false}
);

ContactModel(sequelize)

const { Contact } = sequelize.models;

module.exports = {
    ...sequelize.models,
    Contact,
    conn: sequelize,
}