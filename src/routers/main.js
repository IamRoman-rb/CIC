const path = require("path")
const express = require("express");
const app = express.Router();

const controlador = require("../controllers/mainController");

//Websites Routers
app.get("/", controlador.index);

app.get("/createFile", controlador.createFile);
app.get("/createNews", controlador.createNews);

module.exports = (app);

//Reemplaza router file por homework, crear new, 