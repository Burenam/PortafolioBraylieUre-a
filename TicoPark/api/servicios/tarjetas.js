var express = require('express');
var router = express.Router();

var Pago = require('../modelos/modeloPago.js'); //le dice al js donde buscar el modelo de mongo 
var Tarjeta = require('../modelos/modeloTarjeta.js'); //le dice al js donde buscar el modelo de mongo 

router.get("/listar", function (req, res) {
    
    Tarjeta.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});


router.get("/pagos", function (req, res) {
    
    Pago.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

module.exports = router;