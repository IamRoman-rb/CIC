const path = require("path")
const express = require("express");
const app = express.Router();

const controlador = require("../controllers/main");

//Websites Routers
app.get("/", controlador.index);

module.exports = (app);