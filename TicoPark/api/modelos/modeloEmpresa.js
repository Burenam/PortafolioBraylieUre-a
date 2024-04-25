var mongoose = require('mongoose');

var modeloEmpresa = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    correo: {type: String, unique:true},
    nombre:  {type: String},
    tipoCedula:  {type: String},
    numeroCedula:  {type: String}
});



module.exports = mongoose.model("Empresa", modeloEmpresa, "Empresas" );