var express = require('express');
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'public/images/' });

let controller = require('../controllers/postsController');

router.get('/publish', controller.publish);
router.post('/publish', upload.single('image'), controller.store);

router.get('/:id', controller.detalle);
router.post('/:id', controller.comment);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', controller.update);
router.post('/:id/delete', controller.delete);

module.exports = router;
