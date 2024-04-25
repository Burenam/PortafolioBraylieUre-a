//Registrar Empresa
function registrarEmpleado() {

    nivelFijo = 5;

    var data = {
        nombre: document.getElementById('nombre').value,
        cedula: document.getElementById('cedula').value,
        correo: document.getElementById('correo').value,
        idEmpresa: document.getElementById('idEmpresa').value,
        pass: document.getElementById('pass').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        nivel: nivelFijo
    };

    var data2 = {
        nombre: document.getElementById('nombre').value,
        cedula: document.getElementById('cedula').value,
        correo: document.getElementById('correo').value,
        idEmpresa: document.getElementById('idEmpresa').value,
        idEmpleado: document.getElementById('idEmpleado').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        fechaContratacion: document.getElementById('fechaContratacion').value
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
            title: "Empleado guardado con éxito",
            icon: "success",
          });
          console.log('Usuario creado')
      })
      .catch(function (error) {
        console.log(error);
      })
      
      fetch('/empleados/guardar', {
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
            title: "Empleado guardado con éxito",
            icon: "success",
        }).then((result) => {
            if (result.value) {
                location.replace('../perfiles/perfilEmpresa.html')
            }
    })
    })
    .catch(function (error) {
        console.log(error);
    })

    
}

//Validar empresa
function validarEmpleado() {
    console.log("hola");
    var nombre = document.getElementById("nombre").value;
    var cedula = document.getElementById('cedula').value;
    var idEmpresa = document.getElementById('idEmpresa').value;
    var idEmpleado = document.getElementById('idEmpleado').value;
    var puesto = document.getElementById("puesto").value;
    var correo = document.getElementById("correo").value;
    var pass = document.getElementById("pass").value;
    var fechaContratacion = document.getElementById("fechaContratacion").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var validacion = true;

    if ((nombre == "") || (cedula == "") || (idEmpresa == "") || (idEmpleado == "") || (correo == "") || (pass == "") || (puesto == "") || (fechaContratacion == "") || (fechaNacimiento == "")) {
        swal.fire("Formulario incompleto", "Por favor llene todos los espacios", "error");
        validacion = false;
    }else {
        console.log("Formulario exitoso!");
        registrarEmpleado();
    }

}