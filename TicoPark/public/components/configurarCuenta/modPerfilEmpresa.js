id = localStorage.getItem("usuario");

data = { id:id };

function cargarDatos() {

    fetch('/usuarios/usuario', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (respuesta) {
        return respuesta.json();
    })
    .then(function (respuesta) { //esto llena los campos del input con la info del usuario
        document.getElementById("nombre").value = respuesta[0].nombre;
        document.getElementById("numeroCedula").value = respuesta[0].numeroCedula;
        document.getElementById("correo").value = respuesta[0].correo;
    })
    .catch(function (error) {
        console.log(error);
    })
}

const editarEmpresa = () => {

    console.log("hola");

    usuario = {
        nombre: document.getElementById("nombre").value,
        numeroCedula: document.getElementById("numeroCedula").value,
        correo: document.getElementById("correo").value
    }


    fetch("/listar/modificarUsuario/" + id, { //esto es estudiante.js en api. el req.params.id ahí es el identificador que estamos empujando aca
        body: JSON.stringify(usuario),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then ( function () {
        window.location.replace("configurarCuenta.html");
    })  
}

cargarDatos();