const { contact } = require("../db.js");

const getContactController = async () => {
    const AllContacts = await contact.findAll();

    if (AllContacts.length > 0){
        return AllContacts;
    } else {
        throw new Error("Controller: No contact info in data base.");
    }
}

module.exports = {getContactController};