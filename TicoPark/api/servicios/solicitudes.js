var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Solicitud = require('../modelos/modeloSolicitud.js'); //le dice al js donde buscar el modelo de mongo 

router.get("/listar", function (req, res) {
    
    Solicitud.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

router.post('/guardar', function (req, res) {
    var post_cedula = req.body.cedula;
    var post_correo = req.body.correo;
    var post_pass = req.body.pass;
    var post_fechaNacimiento = req.body.fechaNacimiento;
    var post_permiso = req.body.permiso;
    /*var post_imagenPermiso = req.file.filename;   */
    var post_centroComercial = req.body.centroComercial;
    var post_nombreCentro = req.body.nombreCentro;
    var post_nivel = req.body.nivel;
  
    
  
    var newRequest = new Solicitud({
      _id: new mongoose.Types.ObjectId(),
      cedula: post_cedula,
      correo: post_correo,
      pass: post_pass,
      fechaNacimiento: post_fechaNacimiento,
      permiso: post_permiso,
      /*imagenPermiso: post_imagenPermiso, */   
      centroComercial: post_centroComercial,
      nombreCentro: post_nombreCentro,
      nivel: post_nivel
    });
  
    
  
    newRequest.save()
      .then(
        function (result) {
          console.log('Solicitud enviada');
          res.json(result); 
        }
      )
      .catch(
        function (err) {
          console.log(err);
        }
      );
  })

router.delete("/borrar/:id", async function (req, res) {
    
    await Solicitud.findByIdAndDelete(req.params.id);
    res.json({message: 'Solicitud eliminada'});

});

 

module.exports = router;