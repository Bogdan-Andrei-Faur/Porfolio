const { deleteContactController } = require("../Controllers/deleteContactController.js");

const deleteContactHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await deleteContactController(id);

        res.status(200).json("Delete Succesfuly");
    } catch (error) {
        res.status(500).json("Delete Failed");
    }
}

module.exports = {deleteContactHandler};