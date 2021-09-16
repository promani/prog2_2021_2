var express = require('express');
var router = express.Router();

let controller = require('../controllers/postsController');

router.get('/publish', controller.publish);
router.get('/:id', controller.detalle);

module.exports = router;
