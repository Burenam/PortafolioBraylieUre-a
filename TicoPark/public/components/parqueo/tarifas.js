var tabla = document.getElementById('tablaTarifas');

//Listar Tarifas
function listarTarifas(){
     
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
    usuario = localStorage.getItem("usuario");
    
    fetch('/tarifas/listar')
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {
                for (i = 0; i < json.length; i++) {
                    if (json[i].correo == usuario) {
                        var row = 
                        `<tr>
                        <td> ${json[i].vehiculo} </td>
                        <td> ${json[i].monto} </td>
                        <td> ${json[i].tipoMoneda} </td>
                        <td>  <i onclick="editarTarifa(id)" id="${json[i]._id}" class="fas fa-edit fa-lg iconosTabla"></i> </td>
                        <td id=""><i onclick="borrarTarifas(id)" id="${json[i]._id}" class="fas fa-trash-alt iconosTabla"></i> </td>
                        </tr>`;
                            tabla.insertAdjacentHTML('beforeend', row);
                    }
                }
            }
        )
}

//Buscar Tarifas
function buscarTarifas() {
      
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
    usuario = localStorage.getItem("usuario");
    var busqueda = document.getElementById("busqueda").value;
    
    if (busqueda == "") {
      swal.fire("Búsqueda incompleta", "Por favor ingrese los datos de búsqueda", "error");
      document.getElementById("busqueda").placeholder = "Escribe un tipo de vehículo (ej: Automóvil, Motocicleta, etc)...";
    }
    else {
      fetch('/tarifas/listar')
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {

                noMatch = true;
                for (i = 0; i < json.length; i++) {
                    if ((json[i].vehiculo == busqueda) && (json[i].correo == usuario)) {
                        noMatch = false;
                        var row = 
                        `<tr>
                        <td> ${json[i].vehiculo} </td>
                        <td> ${json[i].monto} </td>
                        <td> ${json[i].tipoMoneda} </td>
                        <td>  <i onclick="editarTarifa(id)" id="${json[i]._id}" class="fas fa-edit fa-lg iconosTabla"></i> </td>
                        <td id=""><i onclick="borrarTarifas(id)" id="${json[i]._id}" class="fas fa-trash-alt iconosTabla"></i> </td> 
                        </tr>`;
                        tabla.insertAdjacentHTML('beforeend', row);
                    }
                }
                if (noMatch){
                  swal.fire("Tarifa no encontrada", "Intente con otro tipo de vehículo", "error");
                }
            }
        )
    }
}

//Registrar Tarifas
function registrarTarifa() {

    correoGalleta = localStorage.getItem("usuario");

    if (document.getElementById('automovil').checked) {
        tipoVehiculo = "Automóvil";
    }
    else if (document.getElementById('motocicleta').checked) {
        tipoVehiculo = "Motocicleta";
    }
    else if (document.getElementById('bicicleta').checked) {
        tipoVehiculo = "Bicicleta";
    }
    else if (document.getElementById('autobus').checked) {
        tipoVehiculo = "Autobús";
    }
    else if (document.getElementById('camion').checked) {
        tipoVehiculo = "Camión";
    }
    else if (document.getElementById('cuadraciclo').checked) {
        tipoVehiculo = "Cuadraciclo";
    }
    else {
        tipoVehiculo = "Otros";
    }
   
    var data = {
        correo: correoGalleta,
        monto: document.getElementById('monto').value,
        tipoMoneda: document.getElementById('tipoMoneda').value,
        vehiculo: tipoVehiculo,
    };

    fetch('/tarifas/guardar', {
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
        swal.fire({
            title: "Tarifa guardada con éxito",
            icon: "success",
          });
          console.log('Usuario creado')
      })
      .catch(function (error) {
        console.log(error);
      });

    
}

//Validar Tarifas
function validarTarifa() {
    var monto = document.getElementById("monto").value;
    var tipoMoneda = document.getElementById("tipoMoneda").value;
    var automovil = document.getElementById('automovil').checked;
    var motocicleta = document.getElementById('motocicleta').checked;
    var bicicleta = document.getElementById('bicicleta').checked;
    var autobus = document.getElementById('autobus').checked;
    var camion = document.getElementById('camion').checked;
    var cuadraciclo = document.getElementById('cuadraciclo').checked;
    var otros = document.getElementById('otros').checked;

    var validacion = true;

    if ((monto == "") || (tipoMoneda == "")) {
        swal.fire("Formulario incompleto", "Por favor llene todos los espacios", "error");
        validacion = false;
    }
    else if (automovil == false && bicicleta == false && autobus == false && camion == false && cuadraciclo == false && motocicleta == false && otros == false ) { 
            swal.fire("Formulario incompleto", "Indique un tipo de vehículo", "error");
            var validacion = false;
    }
    else {
        console.log("Formulario exitoso!");
        registrarTarifa();
    }

}

//Eliminar tarifas
const borrarTarifas = id => {
        
      Swal.fire({
          title: "Está a punto de eliminar una tarifa",
          text: "Esta acción no se puede deshacer. ¿Desea continuar?",
          icon: "warning",
          button: "Sí",
      }).then((result) => {
        if (result.value) {
            fetch("/tarifas/borrar/"+id, {
                method:"DELETE"
              }).then (function () {
                Swal.fire({
                    title: "Tarifa eliminada",
                    text: "La información ha sido eliminada con éxito",
                    icon: 'success',
                }).then ((result) => {
                listarTarifas();
              })
              })
        }
      })
   
}

const editarTarifa = (id) => {
    localStorage.setItem("idTarifa",id);
    location.replace("modificarTarifas.html");
    
}