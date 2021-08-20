const {Router} = require('express')
const router = Router();
const homeworks = require('../controllers/homeworks');

router.get('/', homeworks.index);
router.get('/nueva', homeworks.create);
router.get('/editar/:id', homeworks.edit);

router.post('/guardar', homeworks.store);
router.put('/actualizar/:id', homeworks.update);
router.delete('/borrar/:id', homeworks.remove);

module.exports = router;