
//Genera un número al azar para la contraseña
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Función general para subir imágenes
function subirImagen() {
    console.dir(document.getElementById('imagenAgregada'));
    var archivo = document.getElementById('imagenPermiso').files[0];
    var reader = new FileReader();
    if(imagenPermiso){
        reader.readAsDataURL(archivo);
        reader.onloadend = function () {
            document.getElementById('imagenAgregada').src = reader.result;
            document.getElementById('imagenAgregada').classList.add('imagenAgregada');
            document.getElementById('muestraIcono').remove();
        }
    }
}

// Registro de cuenta de Dueño de parqueo
function registrarDueno() {

    nivelFijo = 2;

    if (document.getElementById("centroSI").checked) {
        centroComercialCheck = true;
    }
    else {
        centroComercialCheck = false;
    }
   
    var data = {
        cedula: document.getElementById("cedula").value,
        correo: document.getElementById('correo').value,
        pass : 'ticoPARK' + getRandomInt(500),
        fechaNacimiento: document.getElementById("fechaNacimiento").value,
        permiso : document.getElementById("permiso").value,
        /*imagenPermiso : document.getElementById('imagenPermiso').files[0],*/
        centroComercial : centroComercialCheck,
        nombreCentro : document.getElementById("nombreCentro").value,
        nivel : nivelFijo,
    };

    fetch('/solicitudes/guardar', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    .then(function (data) {
        return data.json();
      })
      .then(function (res) {
        console.log(res);
        swal({
            title: "Solicitud de registro enviada",
            text: "Por favor, espere que el administrador procese su solicitud.",
            icon: "success",
            button: "Aceptar",
          });
          console.log('Solicitud creada!')
      })
      .catch(function (error) {
        console.log(error);
      });

    
}

//Validar solicitud de Dueño de parqueo
function validarSolicitud() {
    var cedula = document.getElementById("cedula").value;
    var correo = document.getElementById("correo").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var permiso = document.getElementById("permiso").value;
    var nombreCentro = document.getElementById("nombreCentro").value;
    var centroSI = document.getElementById("centroSI").checked;
    var centroNO = document.getElementById("centroNO").checked;

    var diaHoy = new Date();
    var dd = String(diaHoy.getDate()).padStart(2, '0');
    var mm = String(diaHoy.getMonth() + 1).padStart(2, '0'); 
    var yyyy = diaHoy.getFullYear();
    diaHoy = yyyy + '-' + mm + '-' + dd; 
    

    var diaNac = new Date(fechaNacimiento);
    var ddNac = String(diaNac.getDate() + 1).padStart(2, '0');
    var mmNac = String(diaNac.getMonth() + 1).padStart(2, '0'); 
    var yyyyNac = diaNac.getFullYear();
    diaNac = yyyyNac + '-' + mmNac + '-' + ddNac;


    
    var validacion = true;

   
    if ((fechaNacimiento == "") || (cedula == "") || (correo == "") || (permiso == "")) {
        swal("Formulario incompleto", "Por favor llene todos los espacios", "error");
        var validacion = false;
    }
    else {
        if ((yyyy - yyyyNac) < 18) {
            swal("Edad inválida", "Debes ser mayor de edad para registrarte", "error");
            var validacion = false;
        }
        else if ((yyyy - yyyyNac) == 18) {
            if ((mm - mmNac) < 0) {
                swal("Edad inválida", "Debes ser mayor de edad para registrarte", "error");
                var validacion = false;
            }
            else if ((mm - mmNac) == 0) {
                if ((dd - ddNac) < 0) {
                    swal("Edad inválida", "Debes ser mayor de edad para registrarte", "error");
                   var validacion = false;
                }
            }
        }

        if (centroSI == false && centroNO == false) { 
            swal("Formulario incompleto", "Indique si su parqueo se ubica en centro comercial", "error");
            var validacion = false;
        }
        if (centroSI) {
            if (nombreCentro=="") {
                swal("Formulario incompleto", "Ingrese el nombre del centro comercial", "error");
                    var validacion = false;
            }
        }
    }
    
    if (validacion) {
        console.log("Datos correctos! Solicitud enviada.")
        registrarDueno()
    }
}



function listarSolicitudes() {

    var tabla = document.getElementById('tablaSolicitudes');

    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
    
    fetch('/solicitudes/listar')
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {
                for (i = 0; i < json.length; i++) {
                    var row = 
                `<tr>
                <td> ${json[i].cedula} </td>
                <td> ${json[i].correo} </td>
                <td> ${json[i].permiso} </td>
                <td> <i onclick="verImagen()" class="fas fa-id-card fa-lg iconosTabla"></i> </td>
                <td> <i onclick="aceptarSolicitud()" class="fas fa-check fa-lg iconosTabla"> </td>
                <td> <i onclick="rechazarSolicitud()" class="fas fa-times fa-lg iconosTabla"></i> </td>
                </tr>`;
                    tabla.insertAdjacentHTML('beforeend', row);
                }
            }
        )
}



