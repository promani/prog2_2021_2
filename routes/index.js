var express = require('express');
var router = express.Router();

let controller = require('../controllers/indexController');

router.get('/', controller.index);
router.all('/logout', controller.logout);
router.all('/login', controller.login);
router.get('/register', controller.register);
router.post('/register', controller.store);
router.get('/search', controller.search);

module.exports = router;
