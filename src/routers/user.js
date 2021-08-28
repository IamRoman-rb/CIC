const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");

router.get("/ingresar", user.login);
router.get("/unirse", user.register);
router.get("/perfil", user.profile);
module.exports = router ;