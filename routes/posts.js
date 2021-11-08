var express = require('express');
var router = express.Router();
var multer = require('multer');
const upload = multer({ dest: 'public/uploads/' });

let controller = require('../controllers/postsController');

router.get('/publish', controller.publish);
router.post('/publish', upload.single('image'), controller.store);

router.get('/:id', controller.detalle);
router.post('/:id', controller.comment);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', controller.update);
router.post('/:id/delete', controller.delete);

router.get('/:id/like', controller.like);
router.get('/:id/dislike', controller.dislike);

module.exports = router;
