var express = require('express');
var router = express.Router();

let controller = require('../controllers/indexController');

router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);

module.exports = router;
