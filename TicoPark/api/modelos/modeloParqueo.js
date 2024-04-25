var mongoose = require('mongoose');

var modeloParqueo = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    permiso: {type: String, unique:true},
    correo:  {type: String, unique:true},
    nombreParqueo: {type: String},
    direccion:  {type: String},
    tel:  {type: String},
    fechaApertura:  {type: String},
    horarioApertura:  {type: String},
    horarioCierre:  {type: String},
    imagenParqueo:  {type: String},
    provincia: {type: String},
    canton: {type: String},
    distrito: {type: String},
    lat: {type: String},
    long: {type: String},
    rating: {type: Number},
    ratingCount: {type: Number},
    ratingSum: {type: Number},
    activo: {type: Boolean},
    campoCarro: {type: Boolean},
    campoMoto: {type: Boolean},
    campoBici: {type: Boolean},
    campoBus: {type: Boolean},
    campoCamion: {type: Boolean},
    campoCuadra: {type: Boolean}
});


module.exports = mongoose.model("Parqueo", modeloParqueo, "Parqueos");