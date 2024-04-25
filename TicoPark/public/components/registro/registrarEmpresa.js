//Registrar Empresa
function registrarEmpresa() {

    nivelFijo = 3;

    if (document.getElementById('cedulaJuridica').checked) {
        cedula = "Cédula jurídica";
    }
    else if (document.getElementById('cedulaFisica').checked) {
        cedula = "Cédula física";
    }
   console.log(cedula);
    var data = {
        nombre: document.getElementById('nombre').value,
        numeroCedula: document.getElementById('numeroCedula').value,
        correo: document.getElementById('correo').value,
        idEmpresa: document.getElementById('correo').value,
        pass: document.getElementById('contrasena').value,
        nivel: nivelFijo
    };

    var data2 = {
        nombre: document.getElementById('nombre').value,
        tipoCedula: cedula,
        numeroCedula: document.getElementById('numeroCedula').value,
        correo: document.getElementById('correo').value,
    };

    fetch('/usuarios/crear', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
    }) .catch(function (error) {
        console.log(error);
    })

    .then(function (data) {
        return data.json();
      })
      .then(function (res) {
        console.log(res);
        swal.fire({
            title: "Empresa guardada con éxito",
            icon: "success",
          });
          console.log('Usuario creado')
      })
      .catch(function (error) {
        console.log(error);
      })
      
      fetch('/empresas/guardar', {
        method: 'POST',
        body: JSON.stringify(data2),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function (data2) {
        return data2.json();
    })
    .then(function (res) {
        console.log(res);
        swal.fire({
            title: "Empresa guardada con éxito",
            icon: "success",
        }).then((result) => {
            if (result.value) {
                location.replace('../registro/iniciarSesion.html')
            }
    })
    })
    .catch(function (error) {
        console.log(error);
    })

    
}

//Validar empresa
function validarEmpresa() {
    console.log("hola");
    var nombre = document.getElementById("nombre").value;
    
    var cedulaFisica = document.getElementById('cedulaFisica').checked;
    var cedulaJuridica = document.getElementById('cedulaJuridica').checked;
    var numeroCedula = document.getElementById("numeroCedula").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

    var validacion = true;

    if ((correo == "") || (contrasena == "") || (nombre == "") || (numeroCedula == "")) {
        swal.fire("Formulario incompleto", "Por favor llene todos los espacios", "error");
        validacion = false;
    }else if (cedulaFisica == false && cedulaJuridica == false) { 
            swal.fire("Formulario incompleto", "Indique un tipo de cédula", "error");
            var validacion = false;
    }else {
        console.log("Formulario exitoso!");
        registrarEmpresa();
    }

}