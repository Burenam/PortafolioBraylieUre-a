var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var multer = require('multer');

mongoose.connect('mongodb+srv://admin:123queso@ticopark.hukjt.mongodb.net/TicoPARK?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.set('useCreateIndex', true)


//Almacenamiento de imágenes
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../public/assets/uploads'),
  filename(req,file,cb){
      cb(null,file.originalname); // new Date().getTime() + path.extname
  }
})

app.use(multer({storage}).single('imagenPermiso'));
app.use(express.urlencoded({extended:false}));

//Path y general

app.use(express.json());

var folder = path.join(__dirname, '../public');
app.use(express.static(folder));

// servicios de usuarios
app.use('/usuarios' , require('./servicios/usuarios.js'));

// servicios de pagos
app.use('/tarjetas' , require('./servicios/tarjetas.js'));

// servicios de convenios
app.use('/convenios' , require('./servicios/convenios.js'));

// servicios de empresas
app.use('/empresas' , require('./servicios/empresas.js'));

// servicios de solicitudes
app.use('/solicitudes' , require('./servicios/solicitudes.js'));

// servicios de tarifas
app.use('/tarifas' , require('./servicios/tarifas.js'));

// servicios de empleados
app.use('/empleados' , require('./servicios/empleados.js'));

// servicios de parqueos
app.use('/parqueos' , require('./servicios/parqueos.js'));

app.listen(5000, function () {
    console.log('Servidor corriendo en puerto 5000...')
  });