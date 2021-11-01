var express = require('express');
var router = express.Router();

let controller = require('../controllers/usersController');

router.get('/', controller.profile);
router.get('/detalle/:id', controller.detalle);

module.exports = router;
