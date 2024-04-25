var tabla = document.getElementById('tablaEmpresas');


function listarEmpresa(){
     
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
    usuario = localStorage.getItem("usuario");
    
    fetch('/convenios/listarEmpresa')
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {
                for (i = 0; i < json.length; i++) {
                    if(activo == true){
                        activo = activo;
                    }else{
                        activo = inactivo;
                    }
                    if (json[i].correo == usuario) {
                        var row = 
                        `<tr>
                        <td> ${json[i].idConvenio} </td>
                        <td> ${json[i].idEmpresa} </td>
                        <td> ${json[i].idParqueo} </td>
                        <td> ${json[i].activo} </td>
                        </tr>`;
                            tabla.insertAdjacentHTML('beforeend', row);
                    }
                }
            }
        )
}



//Buscar Empresas
function buscarEmpresas() {
      
    while (tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
    usuario = localStorage.getItem("usuario");
    var busqueda = document.getElementById("busqueda").value;
    
    if (busqueda == "") {
      swal.fire("Búsqueda incompleta", "Por favor ingrese los datos de búsqueda", "error");
      document.getElementById("busqueda").placeholder = "Escriba el id de la empresa que desea buscar...";
    }
    else {
      fetch('/convenios/listar')
        .then(
            function (response) {
                return response.json();
            }
        )
        .then(
            function (json) {

                noMatch = true;
                for (i = 0; i < json.length; i++) {
                    if ((json[i].idEmpresa == busqueda) && (json[i].correo == usuario)) {
                        noMatch = false;
                        var row = 
                        `<tr>
                        <td> ${json[i].idConvenio} </td>
                        <td> ${json[i].idEmpresa} </td>
                        <td> ${json[i].idParqueo} </td>
                        <td> ${json[i].activo} </td>
                        </tr>`;
                        tabla.insertAdjacentHTML('beforeend', row);
                    }
                }
                if (noMatch){
                  swal.fire("Empresa no encontrada", "Intente con otro id", "error");
                }
            }
        )
    }
}