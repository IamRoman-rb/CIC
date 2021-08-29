const teacher = require('../models/teacher')
const manager = require('../models/manager')
const student = require('../models/student')
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
    }
    
}
module.exports = controller;