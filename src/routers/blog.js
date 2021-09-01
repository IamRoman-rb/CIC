const {Router} = require('express')
const router = Router();
const blog = require('../controllers/blog');

router.get('/todas', blog.index);
router.get('/nueva', blog.create);
router.get('/ver/:id', blog.show);
router.get('/editar/:id', blog.edit);

router.post('/guardar', blog.store);
router.put('/actualizar/:id', blog.update);
router.delete('/borrar/:id', blog.remove);

module.exports = router;