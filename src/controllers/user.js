const teacher = require('../models/teacher')
const manager = require('../models/manager')
const student = require('../models/student')
const level = require('../models/level')
const course = require('../models/course')
const subject = require('../models/subject')
const controller = {    
    login: (req, res) => {
        return res.render("users/login")
    },
    register: (req, res) => {
        return res.render("users/register")
    },
    profile: (req, res) => {
        return res.render("users/profile",{
            levels: level.all(),
            courses: course.all(),
            subjects: subject.all()
        })
    },
    save: (req, res) => {
        let newStudent = student.create(req.body)
        return res.redirect("/usuario/ingresar")
    },
    access: (req, res) => {
        let email = String(req.body.email);
        let domain = email.trim().split('@');
        let check = domain.includes('cic.com');
        let user =  null;
        if(check){
            user = manager.search("email", email)
            if(user == null){
                user = teacher.search("email", email)
            }
        }else{
            user = student.search("email", email)
        }

        if(user == null){
            return res.render('users/login',{
                errors:{
                    email: "usuario no existe"
                }
            })
        }else if(user.password != req.body.password){
            return res.render('users/login',{
                errors:{
                    password: "la contraseña es incorrecta"
                },
                old:{
                    email: req.body.email
                }
            })
        }else{
            req.session.user = user
            res.cookie('user',req.body.email,{maxAge:32140800000})
            return res.redirect("/")
        }
    },
    logout: (req, res) => {
        res.cookie('user',req.session.user.email,{maxAge:-1});
        delete req.session.user;
        return res.redirect("/");    
    },
    update: (req, res) => {
        let user = null;
        let data = req.body;
        if(req.body.role == 6){
            user = student.search("email", data.email)
            return res.send(req.body,req.files)
        }else{
            user = manager.search("email", data.email)
            if(user == null){
                user = teacher.search("email", data.email)
            }
        }

        if(user != null){
            data.levels = Array.from(data.levels).map(level => parseInt(level))
            if(user.role != 6 && user.role != 4){
                manager.update(user.id, data)
            }else if(user.role != 6 && user.role == 4){
                teacher.update(user.id, data)
            }else{
                if(req.files != undefined && req.files.length > 0){
                    data.avatar = req.files.find(file => String(file.fieldname).toLowerCase().includes("img-profile")).filename
                }
                student.modify(user.id,data)
            }
        }

        return res.redirect("/usuario/salir");

    }
    
}
module.exports = controller;