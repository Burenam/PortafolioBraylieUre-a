var mongoose = require('mongoose');

var modeloEspacio = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    idParqueo: {type: String, unique:true},
    espaciosCarroTot:  {type: Number},
    espaciosCarroDisp:  {type: Number},
    espaciosMotoTot:  {type: Number},
    espaciosMotoDisp: {type: Number},
    espaciosBiciTot: {type: Number},
    espaciosBiciDisp: {type: Number},
    espaciosBusTot: {type: Number},
    espaciosBusDisp: {type: Number},
    espaciosCamionTot: {type: Number},
    espaciosCamionDisp: {type: Number},
    espaciosCuadraTot: {type: Number},
    espaciosCuadraDisp: {type: Number}
});


module.exports = mongoose.model("Espacio", modeloEspacio, "Espacios");