const {Router} = require("express");
const router = Router();
const main = require("../controllers/main");

router.get("/", main.index);

module.exports = router;
