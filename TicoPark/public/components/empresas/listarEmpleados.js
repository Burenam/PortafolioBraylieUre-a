var tabla = document.getElementById("contenido_tabla");

const listarUsuarios = () => {
    fetch("/empleados/listarUsuarios", {
      method: "GET",
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
             
        for (i=0;i<data.length;i++) {
  
            /* Signo de dolar y llaves indica, en java moderno hipster, que todo eso es js DENTRO de HTML, dentro de comillas torcidas `` */
  
              contenido_tabla.innerHTML += `
                      <tr>
                      <td id="">${data[i].idEmpleado}</td> 
                      <td id="">${data[i].correo}</td>
                      <td id="">${data[i].cedula}</td>
                      <td id="">${data[i].puesto}</td>
                      <td id="">${data[i].fechaContratacion}</td>
                      <td id=""> <i  onclick="borrar(id)" id="${data[i]._id}" class="fas fa-trash-alt iconosTabla"></i> </td>
                      </tr>
                      `;
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const borrar = id => {
      Swal.fire({
          icon: 'warning',
          title: 'Está a punto de eliminar una cuenta de usuario',
          text: 'Esta acción no se puede deshacer. ¿Desea continuar?',
          confirmButtonText: 'Si'
      }).then((result) => {
        if (result.value) {
            fetch("/empleados/borrar/"+id, {
                method:"DELETE"
              }).then (function () {
                Swal.fire(
                    'Usuario eliminado',
                    'La cuenta ha sido eliminada con exito',
                    'success'
                  ).then ((result) => {
                location.reload();
              })
              })
        }
      })
   
}