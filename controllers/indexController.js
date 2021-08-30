const autos = require('../modules/autos');

const controller = {
    index: function(req, res, next) {
        res.render('index', { title: 'Express', autos: autos.lista });
      }
}

module.exports = controller;