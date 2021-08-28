const student = require('../models/student');
const controller = {    
    login: (req, res) => {
        return res.render("users/login")
    },
    register: (req, res) => {
        return res.render("users/register")
    },
    profile: (req, res) => {
        return res.render("users/profile")
    },
    save: (req, res) => {
        let newStudent = student.create(req.body)
        return res.redirect("/usuario/ingresar")
    },
    access: (req, res) => {
        return res.send(req.body)
    }

}

module.exports = controller;