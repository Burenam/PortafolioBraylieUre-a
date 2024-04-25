var mongoose = require('mongoose');

var modeloTarjeta = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    idPago: {type: String},
    idTarjeta:  {type: String},
    nombre:{type: String},
    numero:{type: String},
    cvv:{type: String},
    fechaExp:{type: String}    
});


module.exports = mongoose.model("Tarjeta", modeloTarjeta, "Tarjetas");