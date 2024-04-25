var express = require('express');
var router = express.Router();

var Parqueo = require('../modelos/modeloParqueo.js'); //le dice al js donde buscar el modelo de mongo 
var Espacio = require('../modelos/modeloEspacio.js'); 

router.get("/listar", function (req, res) {
    
    Parqueo.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

router.get("/espacios", function (req, res) {
    
    Espacio.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});


module.exports = router;