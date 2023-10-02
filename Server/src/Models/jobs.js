const { Datatypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("jobs", {
        id: {
            type: Datatypes.UUID,
            defaultValue: Datatypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        description: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        photo: {
            type: Datatypes.STRING,
            allowNull: false
        },
        active: {
            type: Datatypes.BOOLEAN,
            allowNull: false
        }
    })
}