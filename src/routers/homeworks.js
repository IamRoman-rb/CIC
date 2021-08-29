const {Router} = require('express')
const router = Router();
const homeworks = require('../controllers/homeworks');
const file = require("../middlewares/files.js");
const multer = require('multer');
const upload = multer({storage: file("homeworks")});

router.get('/todas', homeworks.index);
router.get('/nueva', homeworks.create);
router.get('/:id', homeworks.show);
router.get('/editar/:id', homeworks.edit);

router.post('/guardar',[upload.any()], homeworks.store);
router.put('/actualizar/:id', homeworks.update);
router.delete('/borrar/:id', homeworks.remove);

module.exports = router;