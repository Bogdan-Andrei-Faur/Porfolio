const { contact } = require("../db");

const deleteContactController = async (id) => {
    const data = await contact.destroy({where: {id: id} });
    
    return data;
}

module.exports = {deleteContactController};