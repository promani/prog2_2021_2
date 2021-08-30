const autos = require('../modules/autos');

const controller = {
    index: function (req, res) {
        res.render('autos/index', { autos: autos.lista })
    },
    marca: function (req, res) {
        const result = autos.porMarca(req.params.marca);
        if (result.length == 0){
            res.send(`Por el momento no tenenmos autos de la marca ${req.params.marca}.`)
        } else {
            res.render('autos/marca', { autos: result })
        }
    },
    color: function (req, res) {
        const result = autos.porColor(req.params.color);
        if (result.length == 0){
            res.send(`Por el momento no tenenmos autos del color ${req.params.color}.`)
        } else {
            res.send(result)
        }
    },
    anio: function (req, res) {
        const result = autos.porAnio(req.params.color);
        if (result.length == 0){
            res.send(`Por el momento no tenenmos autos del año ${req.params.anio}.`)
        } else {
            res.send(result)
        }
    },
    patente: function (req, res) {
        const result = autos.porPatente(req.params.patente);
        if (result){
            res.render('autos/detalle', { auto: result })
        } else {
            res.send(`Por el momento no tenenmos autos con patente ${req.params.patente}.`)
        }
    },
}

module.exports = controller;