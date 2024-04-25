var data;

function cargarDatos() {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;
    var cont = 0;

    //carga los datos de la DB
    fetch('/usuarios/listarUsuarios')
        .then(
            function (response) {
                return response.json(); //convierte el resultado a json
            }
        )
        .then(
            function (json) {
                for (i = 0; i < json.length; i++) {
                    if ((json[i].correo == user) && (json[i].pass == pass)) {
                        redirect(json[i]);
                        cont = 1;
                        break;
                    };                    
                }
                if (cont == 0) {
                    Swal.fire({
                        title: 'Información incorrecta',
                        text: 'El usuario o contraseña ingresado es erróneo.',
                        icon: 'error'
                    })
                };
            }
        )
}


const redirect = (json) => {
    localStorage.setItem("usuario", json.correo);
    localStorage.setItem("nivel", json.nivel);
    localStorage.setItem("parqueo", json.permiso);
    localStorage.setItem("pass",json.pass);
    localStorage.setItem("id",json._id);
    localStorage.setItem("pago",json.idPago);

    switch (json.nivel) {
        case 5:
            location.replace("../perfiles/perfilCliente.html");
            break;
        case 4:
            location.replace("../perfiles/perfilEmpleado.html");
            break;
        case 3:
            location.replace("../perfiles/perfilEmpresa.html");
            break;
        case 2:
            // si el nombre del parqueo es vacío se entiende que es la primera vez que el usuario de parqueo se loggea, y hay que redireccionarlo al formulario
            location.replace("../perfiles/perfilDueno.html");
            break;
        case 1:
            location.replace("../perfiles/perfilAdmin.html");
            break;
    }
}