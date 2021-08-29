const multer = require("multer");
const path = require("path");
const fs = require("fs");
module.exports = (folder) => multer.diskStorage({
    destination:(req, file, cb) => {
        let upload = path.join(__dirname,"../../public","upload",folder)
        if(!fs.existsSync(upload)) {
            fs.mkdirSync(upload)
        }
        return cb(null, upload)
    },
    filename:(req, file, cb) => {
        return cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
})