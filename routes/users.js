var express = require('express');
var router = express.Router();

let controller = require('../controllers/users');

router.get('/', controller.findAll);

module.exports = router;
