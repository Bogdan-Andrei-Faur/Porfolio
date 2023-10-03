const validate = async (req, res, next) => {
    const { name, lastName, email, description } = req.body;
    
    if (!name || name.length < 1) return res.status(400).json({error: "Missing name"});
    if (!lastName || lastName.length < 1) return res.status(400).json({error: "Missing lastName"});
    if (!email || email.length < 1) return res.status(400).json({error: "Missing email"});
    if (!description || description.length < 1) return res.status(400).json({error: "Missing description"});

    if (typeof name !== "string")
        return res.status(400).json({ error: "Name has to be a string" });
    if (typeof lastName !== "string")
        return res.status(400).json({ error: "LastName has to be a string" });
    if (typeof email !== "string")
        return res.status(400).json({ error: "Email has to be a string" });
    if (typeof description !== "string")
        return res.status(400).json({ error: "Description has to be a string" });

    next();
}

module.exports = {validate};