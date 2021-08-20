const {Router} = require("express");
const router = Router();
const user = require("../controllers/user");

router.get("/ingresar", user.login);
router.get("/unirse", user.register);

module.exports = router ;