const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");

router.get("/ingresar", user.login);
router.get("/unirse", user.register);
router.get("/perfil", user.profile);

router.post("/guardar", user.save)
router.post("/ingresar", user.access)

module.exports = router ;