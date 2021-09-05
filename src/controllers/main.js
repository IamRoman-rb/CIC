const homework = require("../models/homework");
const blog = require("../models/new");
const controller = {
    index: (req, res) => {
        return res.render("index", {
            homeworks:[],
            news:[]
        })
    }
}

// blog.all().sort((a,b) => new Date(b.date) - new Date(a.date)).slice(-3)
// homework.allWithExtras().sort((a,b) => new Date(b.date) - new Date(a.date)).slice(-3)

module.exports = controller;