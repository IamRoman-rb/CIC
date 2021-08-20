// const path = require("path");
// const fs = require("fs");
// const userModel = require("../models/user");
// const {validationResult} = require("express-validator");

// module.exports = {
//     login: (req, res) => res.render("login", {title: "Access"}),
//     register: (req, res) => res.render("register", {title: "Crea Tu Cuenta"}),

//     save: (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.render("register", {errors: errors.mapped(), title:"Crea Tu Cuenta", old: req.body});
//         }else{
//             userModel.create(rqe.body);
//             return res.redirect("/login")
//         }
//     },
//     access: (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.render("login", {errors: erros.mapped(), title: "Ingresar", old: req.body});
//         }else{
//             req.session.user = userModel.search("email", req.body.email);
//             return res.redirect("/");
//         }
//     }
// }