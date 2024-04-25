var mongoose = require('mongoose');

var modeloSolicitud = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    cedula: {type: String},
    correo:  {type: String},
    pass: {type: String},
    fechaNacimiento:  {type: String},
    permiso:  {type: String},
    imagenPermiso: {type: String},    
    centroComercial:  {type: Boolean},
    nombreCentro:  {type: String},
    nivel: {type: Number}
});


module.exports = mongoose.model("Solicitud", modeloSolicitud, "Solicitudes" );