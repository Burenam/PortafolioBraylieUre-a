//redirect de configurarCuenta.html
const confCuenta = () => {
    var nivel = localStorage.getItem("nivel");

    switch (nivel) {
        case 5:
            location.replace("components/configurarCuenta/");
            break;
        case 4:
            location.replace("components/configurarCuenta/");
            break;
        case 3:
            location.replace("components/configurarCuenta/");
            break;
        case 2:
            location.replace("components/configurarCuenta/");
            break;
        case 1:
            location.replace("components/configurarCuenta/modPerfilAdmin.html");
            break;
    }
}


//modificar contraseña
const editarPass = () => {

    var passOld = document.getElementById("passOld").value;
    var passNew1 = document.getElementById("passNew1").value;
    var passNew2 = document.getElementById("passNew2").value;

    

    //saca contraseña actual de localStorage
    pass = localStorage.getItem("pass");
    id = localStorage.getItem("id");


    if ((passOld == localStorage.getItem("pass")) && (passNew1 == passNew2)) {

        usuario = {
            pass: document.getElementById("passNew1").value
        }

        fetch("/usuarios/modificarUsuario/" + id, { //esto es estudiante.js en api. el req.params.id ahí es el identificador que estamos empujando aca
            body: JSON.stringify(usuario),
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then( function() {
            localStorage.setItem("pass", document.getElementById("passNew1").value); //aquí se guarda la contraseña nueva en localStorage

            Swal.fire({
                icon: 'success',
                title: 'Cambio exitoso',
                text: 'Su contraseña ha sido actualizada'
            })
            .then((result) => {
                if (result.value) {
                    location.reload()
                }
        })})


    } else if (passOld != localStorage.getItem("pass")) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'Su contraseña actual es incorrecta'
        })
    } else if (passNew1 != passNew2) {
        Swal.fire({
            icon: 'error',
            title: 'Contraseña incorrecta',
            text: 'Su nueva contraseña debe ser igual en ambos campos'
        })
    }
}

// cerrar sesion

function cerrarSesion() {
    localStorage.clear();    
    window.location.href='/index.html'; 
}