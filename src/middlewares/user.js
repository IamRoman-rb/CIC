const teacher = require('../models/teacher')
const manager = require('../models/manager')
const student = require('../models/student')
module.exports = (req,res,next) => {
    let user = null;

    if(req.cookies != undefined && req.cookies.user != undefined) {
        let email = req.cookies.email;
        let domain = email.trim().split('@')[1];
        let check = domain.includes('cic.com');
        user = check ? manager.search("email", email) != null ? manager.search("email", email) : teacher.search("email", email) != null ? teacher.search("email", email) : null : student.search("email", email);  
        req.session.user = user
    }

    if(req.session != undefined && req.session.user != undefined) {
        user = req.session.user
    }

    res.locals.user = user
}