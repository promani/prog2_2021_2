var express = require('express');
var router = express.Router();

let controller = require('../controllers/productsController');

router.get('/index', controller.index);
router.get('/marca/:marca', controller.marca);
router.get('/color/:color', controller.color);
router.get('/anio/:anio', controller.anio);
router.get('/patente/:patente', controller.patente);

module.exports = router;
