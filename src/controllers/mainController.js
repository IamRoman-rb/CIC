const homewordk = require("../models/homewordks");

const controller = {
    
    index: (req, res) => {
        return res.render("index", {homewordk: homewordk.all()})
    },
    login: (req, res) => {
        return res.render("login")
    },
    register: (req, res) => {
        return res.render("register")
    },
    createFile: (req, res) => {
        return res.render("createFile")
    },
    createNews: (req, res) => {
        return res.render("createNews")
    }
}

module.exports = (controller);