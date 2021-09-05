const teacher = require('../models/teacher')
const manager = require('../models/manager')
const student = require('../models/student')
const level = require('../models/level')
const course = require('../models/course')
const subject = require('../models/subject')
const controller = {
    index: (req,res) => {
        return res.render("homeworks/list",{})
    },
    show: (req,res) => {
        return res.render("homeworks/detail",{})
    },
    create: (req,res) => {
        return res.render("homeworks/new",{
            subjects: req.session.user.role == 4 ? req.session.user.subjects : subject.allWithExtras(),
            levels: req.session.user.role == 4 ? req.session.user.levels : level.allWithExtras(),
            courses:req.session.user.role == 4 ? req.session.user.courses : course.allWithExtras(),
            teachers: teacher.allWithExtras()
        })
    },
    edit: (req,res) => {
        return res.render("homeworks/edit",{})
    },
    store: (req,res) => {
        return res.send({data:req.body,files:req.files})
    },
    update: (req,res) => {
        return res.send({data:req.body})
    },
    remove: (req,res) => {
        return res.send({data:req.body})
    }
}

module.exports = controller
