var mongoose = require('mongoose');

var modeloPago = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    idTransaccion: {type: String, unique:true},
    correo: {type: String},
    parqueo:  {type: String},
    monto:  {type: Number},
    fecha:  {type: String},
    horaStart: {type: String},    
    horaEnd:  {type: String},
    vehiculo:  {type: String}
});


module.exports = mongoose.model("Pago", modeloPago, "Pagos" );