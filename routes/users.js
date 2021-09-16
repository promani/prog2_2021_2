var express = require('express');
var router = express.Router();

let controller = require('../controllers/users');

router.get('/detalle/:username', controller.detalle);

module.exports = router;
