const { postContactController } = require("../Controllers/postContactController.js");

const postContactHandler = async (req, res) => {
    try {
        const data = req.body;
        
        
        const newContact = await postContactController(data);
console.log(newContact)
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json("Handler: Creation Failed");
    }
}

module.exports = {postContactHandler};