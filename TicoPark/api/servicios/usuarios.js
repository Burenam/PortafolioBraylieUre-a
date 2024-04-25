var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Usuario = require('../modelos/modeloUsuario.js'); //le dice al js donde buscar el modelo de mongo

router.get("/listarUsuarios", function (req, res) {
    
    Usuario.find().exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});


router.post("/listarUsuario", function (req, res) {
    
    id = req.body.id;

    Usuario.find({_id:id}).exec()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })

});

router.put("/modificarUsuario/:id", function (req, res) { //se pone :id por que es una variable que se recibe
    
    Usuario.updateOne( { _id:req.params.id} , {$set: req.body}, //el $set:req.body busca la info que se esta mandando. si existe, se modifica. si no, no. el $ es un comando de mongo que denota todos los campos a modificar, los engloba

        function (error, info) {
            if(error){
                res.json({
                    resultado:false,
                    msg:'No se pudo modificar el usuario'
                });
            } else{
                res.json({ //aqui dice que si sirve, si se modifica al menos 1 campo, el resultado es true y la info se guarda.
                    resultado:true,
                    info: info
                })
            }
        } )

});

//eliminar cuenta
router.delete("/borrar/:id", async function (req, res) {
    
    await Usuario.findByIdAndDelete(req.params.id);
    res.json({message: 'Usuario Eliminado'});

});

//crea un usuario
router.post('/crear', function (req, res) { //aqui se pone todo igual al modelo. como en este caso usamos Prueba, se usa nombre cedula y correo.
    var post_nombre = req.body.nombre;
    var post_cedula = req.body.cedula;
    var post_fechaNacimiento = req.body.fechaNacimiento;
    var post_nivel = req.body.nivel;
    var post_idEmpresa = req.body.idEmpresa;
    var post_correo = req.body.correo;
    var post_pass = req.body.pass;
    var post_permiso = req.body.permiso;
    var post_imagenPermiso = req.body.imagenPermisoo;

  
    /* CREACION */
  
    var Usuario1 = new Usuario({ //igual que en al linea 39, aqui dice que la nueva info se mete en la coleccion Prueba. se puede cambiar a Usuario o a lo que sea.
        _id: new mongoose.Types.ObjectId(),
        nombre: post_nombre,
        cedula: post_cedula,
        fechaNacimiento: post_fechaNacimiento,
        nivel: post_nivel,
        idEmpresa: post_idEmpresa,
        correo: post_correo,
        pass:post_pass,    
        permiso: post_permiso,
        imagenPermiso: post_imagenPermiso,
    });
  
    /* INSERTAR ITEM */
  
    Usuario1.save()
      .then(
        function (result) {
          res.json(result);
        }
      )
      .catch(
        function (err) {
          console.log(err);
        }
      );
  })

//lista a 1 usuario en específico (llena los campos en modificar.js)
router.post('/usuario', function (req, res) {
    
    id = req.body.id; //el nombre id se saca de editarUsuario.js, linea 4
  
    Prueba.find({_id:id}).exec() //OJO AQUI: si se cambia esto por Usuario.find, buscaría el id en esta colección
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (err) {
        console.log(err);
    })
  
  });

//modificar un usuario
router.put("/modificarUsuario/:id", function (req, res) { //se pone :id por que es una variable que se recibe

    Prueba.updateOne({
        _id: req.params.id
      }, {
        $set: req.body
      }, //el $set:req.body busca la info que se esta mandando. si existe, se modifica. si no, no. el $ es un comando de mongo que denota todos los campos a modificar, los engloba
  
      function (error, info) {
        if (error) {
          res.json({
            resultado: false,
            msg: 'No se pudo modificar el usuario'
          });
        } else {
          res.json({ //aqui dice que si sirve, si se modifica al menos 1 campo, el resultado es true y la info se guarda.
            resultado: true,
            info: info
          })
        }
      })
  });

module.exports = router;