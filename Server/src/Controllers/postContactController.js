const { contact } = require("../db.js")

const postContactController = async (value) => {
    const {name, lastName, email, description} = value;
    const newContact = await contact.findOrCreate({
        where: { email: email},
        defaults: { name: name, lastName: lastName, email: email, description: description }
    })

    if (newContact){
        return newContact;
    } else {
        throw new Error("Controller: Creation Failed");
    }
    
}

module.exports = {postContactController};