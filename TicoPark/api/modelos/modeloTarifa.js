var mongoose = require('mongoose');

var modeloTarifa = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    correo:  {type: String},
    monto: {type: Number},
    tipoMoneda: {type: String},
    vehiculo: {type: String}
});


module.exports = mongoose.model("Tarifa", modeloTarifa, "Tarifas" );