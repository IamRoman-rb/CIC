const Router = require('express')
const router = Router();
const blog = require('../controllers/blog');

router.get('/', blog.index);
router.get('/nueva', blog.create);
router.get('/editar/:id', blog.edit);

router.post('/guardar', blog.store);
router.put('/actualizar/:id', blog.update);
router.delete('/borrar/:id', blog.remove);

module.exports = router;