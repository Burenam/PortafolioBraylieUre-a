var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Empleado = require('../modelos/modeloEmpleado.js'); //le dice al js donde buscar el modelo de mongo 

router.get("/listarUsuarios", function (req, res) {
    
    Empleado.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })
});

//eliminar cuenta
router.delete("/borrar/:id", async function (req, res) {
    
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({message: 'Usuario Eliminado'});

});


//Registrar Empleado
router.post('/guardar', function (req, res) {
    var post_idEmpleado = req.body.idEmpleado;
    var post_cedula = req.body.cedula;
    var post_correo = req.body.correo;
    var post_idEmpresa = req.body.idEmpresa;
    var post_puesto = req.body.puesto;
    var post_fechaContratacion = req.body.fechaContratacion;
  
    var newFee = new Empleado({
      _id: new mongoose.Types.ObjectId(),
      idEmpleado: post_idEmpleado,
      cedula: post_cedula,
      correo: post_correo,
      idEmpresa: post_idEmpresa, 
      puesto: post_puesto,
      fechaContratacion: post_fechaContratacion

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