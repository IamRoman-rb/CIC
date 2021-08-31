const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");
const file = require("../middlewares/files.js");
const multer = require('multer');
const upload = multer({storage: file("student")});

router.get("/ingresar", user.login);
router.get("/unirse", user.register);
router.get("/perfil", user.profile);
router.get("/salir", user.logout);

router.post("/guardar", user.save)
router.post("/ingresar", user.access)
router.put("/actualizar",[upload.any()],user.update)

module.exports = router ;