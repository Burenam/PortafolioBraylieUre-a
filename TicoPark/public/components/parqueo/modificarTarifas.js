// Modificar tarifas
cargarDatos()


function cargarDatos() {
    
    id = localStorage.getItem("idTarifa");
    data = { id:id };

    fetch('/tarifas/listarTarifa', {
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
        document.getElementById("monto").value = respuesta[0].monto;
    
    })
    .catch(function (error) {
        console.log(error);
    })
}

const editarTarifas = () => {


    tarifa = {
        monto: document.getElementById("monto").value
    }
    fetch("/tarifas/modificar/" + id, { //esto es estudiante.js en api. el req.params.id ahí es el identificador que estamos empujando aca
        body: JSON.stringify(tarifa),
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then ( function () {
        location.replace("administrarTarifas.html");
    })  
}


function regresar() {
    location.replace("administrarTarifas.html");
}