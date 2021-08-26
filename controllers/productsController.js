const autos = require('../modules/autos');

const controller = {
    index: function (req, res) {
        res.send(autos.lista)
    },
    marca: function (req, res) {
        const result = autos.porMarca(req.params.marca);
        if (respuesta.length == 0){
            res.send(`Por el momento no tenenmos autos de la marca ${req.params.marca}.`)
        } else {
            res.send(result)
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
            res.send(`<h1 style="color:${result.color}">${result.describirse()}</h1>`)
        } else {
            res.send(`Por el momento no tenenmos autos con patente ${req.params.patente}.`)
        }
    },
}

module.exports = controller;