const homework = require("../models/homework");

const controller = {
    
    index: (req, res) => {
        return res.render("index", {homeworks: homework.all()})
    },
    createFile: (req, res) => {
        return res.render("createFile")
    },
    createNews: (req, res) => {
        return res.render("createNews")
    }
}

module.exports = controller;