const path = require("path")
const express = require("express");
const app = express.Router();

const controlador = require("../controllers/userController");

app.get("/login", controlador.login);
app.get("/register", controlador.register);

module.exports = (app);