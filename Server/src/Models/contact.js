const { Datatypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("contact", {
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
        email: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })
}