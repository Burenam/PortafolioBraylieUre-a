var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Pago = require('../modelos/modeloPago'); //le dice al js donde buscar el modelo de mongo 

router.get("/listar", function (req, res) {
    
    Pago.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

router.post("/listarPagos", function (req, res) {
    
  id = req.body.id;

  Pago.find({_id:id}).exec()
  .then(function (resultado) {
      res.json(resultado);
  })
  .catch(function (err) {
      console.log(err);
  })

});
 
module.exports = router;