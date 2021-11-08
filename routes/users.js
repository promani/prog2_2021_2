var express = require('express');
var router = express.Router();

let controller = require('../controllers/usersController');

router.get('/', controller.profile);
router.get('/:id', controller.detalle);
router.get('/:id/follow', controller.follow);
router.get('/:id/unfollow', controller.unfollow);

module.exports = router;
