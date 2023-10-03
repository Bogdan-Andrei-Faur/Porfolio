const { getContactController } = require("../Controllers/getContactController.js");

const getContactHandler = async (req, res) => {
    try {
        const allContacts = await getContactController();
        
        res.status(200).json(allContacts); 
        
    } catch (error) {
        res.status(404).json("Handler: No contact info in data base.");
    }
}

module.exports = {getContactHandler};