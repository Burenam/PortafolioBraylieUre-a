var mongoose = require('mongoose');

var modeloEmpleado = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    idEmpleado: {type: String, unique: true},
    correo: {type: String},
    cedula: {type: String},
    idEmpresa: {type: String},
    puesto: {type: String},
    fechaContratacion: {type: String}
});


module.exports = mongoose.model("Empleado", modeloEmpleado, "Empleados" );