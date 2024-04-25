var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Empresa = require('../modelos/modeloEmpresa'); //le dice al js donde buscar el modelo de mongo 

router.get("/listar", function (req, res) {
    
    Empresa.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});


//Registrar Empresa
router.post('/guardar', function (req, res) {
    var post_nombre = req.body.nombre;
    var post_tipoCedula = req.body.tipoCedula;
    var post_numeroCedula = req.body.numeroCedula;
    var post_correo = req.body.correo;
  
    var newFee = new Empresa({
      _id: new mongoose.Types.ObjectId(),
      nombre: post_nombre,
      tipoCedula: post_tipoCedula,
      numeroCedula: post_numeroCedula, 
      correo: post_correo,
    });
  
    newFee.save()
      .then(
        function (result) {
          console.log('Solicitud enviada');
          res.json(result); 
        }
      )
      .catch(
        function (err) {
          console.log("El usuario ya se encuentra registrado");
        }
      );
  })


module.exports = router;