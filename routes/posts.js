var express = require('express');
var router = express.Router();

let controller = require('../controllers/postsController');

router.get('/publish', controller.publish);
router.post('/publish', controller.store);

router.get('/:id', controller.detalle);

router.get('/:id/edit', controller.edit);
router.post('/:id/edit', controller.update);
router.post('/:id/delete', controller.delete);

module.exports = router;
