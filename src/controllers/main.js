const homework = require("../models/homework");

const controller = {
    
    index: (req, res) => {
        return res.render("index", {homeworks: homework.all()})
    }
}

module.exports = controller;