const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));
server.use(morgan("dev"));
server.use(cors());

module.exports = server;
