var mongoose = require('mongoose');

var modeloConvenio = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    idConvenio: {type: String, unique:true},
    idEmpresa: {type: String},
    idParqueo: {type: String},
    activo: {type: Boolean},
    carro: {type: Boolean},
    descCarro: {type: Number},
    moto: {type: Boolean},
    descMoto: {type: Number},
    bici : {type: Boolean},
    descBici : {type: Number},
    bus : {type: Boolean},
    descBus : {type: Number},
    camion : {type: Boolean},
    descCamion : {type: Number},
    cuadra : {type: Boolean},
    descCuadra : {type: Number}
});


module.exports = mongoose.model("Convenio", modeloConvenio, "Convenios" );