var mongoose = require('mongoose');

var modeloUsuario = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nombre: {type: String},
    cedula: {type: String},
    fechaNacimiento: {type: String},
    nivel: {type: Number},
    idEmpresa: {type: String},
    correo: {type: String, unique: true},
    pass:{type: String},    
    permiso: {type: String},
    imagenPermiso: {type: String}
});


module.exports = mongoose.model("Usuario", modeloUsuario, "Usuarios" );