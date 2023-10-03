const { Router } = require("express");
const { getContactHandler } = require("../Handlers/getContactHandler");
const { postContactHandler } = require("../Handlers/postContactHandler");
const { deleteContactHandler } = require("../Handlers/deleteContactHandler");
const { validate } = require("../Middlewares/validate");

const router = Router();

router.get("/", getContactHandler);
router.post("/", validate, postContactHandler);
router.delete("/:id", deleteContactHandler);

module.exports = router;