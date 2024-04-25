var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Convenio = require('../modelos/modeloConvenio.js'); //le dice al js donde buscar el modelo de mongo 

router.get("/listar", function (req, res) {
    
    Convenio.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

router.post("/listarEmpresa", function (req, res) {
    
    id = req.body.id;
  
    Convenio.find({_id:id}).exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })
  
  });

module.exports = router;