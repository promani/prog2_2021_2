var express = require('express');
var router = express.Router();

let controller = require('../controllers/users');

router.get('/', controller.findAll);
router.get('/:username', controller.findByUsername);

module.exports = router;
