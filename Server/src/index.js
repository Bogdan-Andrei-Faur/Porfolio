const server = require("./app.js");
const { conn } = require("./db.js");
const PORT = 3001;

conn.sync({alter: true}).then(async () => {
    server.listen(PORT, () => {
        console.log(`%s listening at ${PORT}`)
    })
})