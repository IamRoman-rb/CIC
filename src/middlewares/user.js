const teacher = require('../models/teacher')
const manager = require('../models/manager')
const student = require('../models/student')
module.exports = (req,res,next) => {
    let user = null;

    if(req.cookies != undefined && req.cookies.user != undefined) {
        let email = String(req.cookies.user);
        let domain = email.trim().split('@');
        let check = domain.includes('cic.com');
        if(check){
            user = manager.search("email", email)
            if(user == null){
                user = teacher.search("email", email)
            }
        }else{
            user = student.search("email", email)
        }
        req.session.user = user
    }

    if(req.session != undefined && req.session.user != undefined) {
        user = req.session.user
    }

    res.locals.user = user
    next();
}