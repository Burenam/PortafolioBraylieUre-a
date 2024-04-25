window.onload = function() { 
    cargarDatos();
}

var tabla = document.getElementById('tablaUsuarios'); 
var id = localStorage.getItem("usuario");

function cargarDatos() {  
    //borra la tabla  
    //carga los datos de la DB en la tabla
    fetch('/tarjetas/pagos')
    .then(
        function(response) {
            return response.json();
        }        
    )
    .then(
        function(json) {
            console.log(json);
            for(i=0;i<json.length;i++) {
                var row = `<tr>
                <td> ${json[i].parqueo} </td>
                <td> ${json[i].fecha} </td>
                <td> ${json[i].horaStart}  -  ${json[i].horaEnd} </td>
                <td> ${json[i].vehiculo} </td>
                <td> ₡${json[i].monto} </td>
                </tr>`;
                tabla.insertAdjacentHTML('beforeend', row);
            }
        }
    )
}

/* var row = `<tr>
<td> ${json[i].parqueo} </td>
<td> ${json[i].cedula} </td>
<td> ${json[i].correo} </td>
<td> <button type="button" onclick="editarUsuario(id)" id="${json[i]._id}">Editar Usuario</button> </td>
<td> <button type="button" onclick="borrarUsuario(id)" id="perro">Borrar Usuario</button> </td>
</tr>`;
tabla.insertAdjacentHTML('beforeend', row); */