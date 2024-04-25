var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Tarifa = require('../modelos/modeloTarifa'); //le dice al js donde buscar el modelo de mongo 

router.get("/listar", function (req, res) {
    
    Tarifa.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

//Registrar Tarifa
router.post('/guardar', function (req, res) {
    var post_correo = req.body.correo;
    var post_monto = req.body.monto;
    var post_tipoMoneda = req.body.tipoMoneda;
    var post_vehiculo = req.body.vehiculo;
  
    var newFee = new Tarifa({
      _id: new mongoose.Types.ObjectId(),
      correo: post_correo,
      monto: post_monto,
      tipoMoneda: post_tipoMoneda, 
      vehiculo: post_vehiculo
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
          console.log("La tarifa ya está registrada");
        }
      );
  })

// Eliminar Tarifa 
router.delete("/borrar/:id", async function (req, res) {
    await Tarifa.findByIdAndDelete(req.params.id);
    res.json({message: 'Tarifa eliminada'});

});

// Modificar Tarifa
router.put("/modificar/:id", function (req, res) { //se pone :id por que es una variable que se recibe

  Tarifa.updateOne({
      _id: req.params.id
    }, {
      $set: req.body
    }, //el $set:req.body busca la info que se esta mandando. si existe, se modifica. si no, no. el $ es un comando de mongo que denota todos los campos a modificar, los engloba

    function (error, info) {
      if (error) {
        res.json({
          resultado: false,
          msg: 'No se pudo modificar la tarifa'
        });
      } else {
        res.json({ //aqui dice que si sirve, si se modifica al menos 1 campo, el resultado es true y la info se guarda.
          resultado: true,
          info: info
        })
      }
    })
});

router.post("/listarTarifa", function (req, res) {
    
  id = req.body.id;

  Tarifa.find({_id:id}).exec()
  .then(function (resultado) {
      res.json(resultado);
  })
  .catch(function (err) {
      console.log(err);
  })

});
 
module.exports = router;