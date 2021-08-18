const path = require("path")
const express = require("express");
const app = express.Router();

const controlador = require("../controllers/mainController");

//Websites Routers
app.get("/", controlador.index);
app.get("/login", controlador.login);
app.get("/register", controlador.register);
app.get("/createFile", controlador.createFile);
app.get("/createNews", controlador.createNews);

module.exports = (app);