//Eliminar ceunta
const borrarCuenta = id => {
        
  Swal.fire({
      title: "Está a punto de eliminar su cuenta",
      text: "Esta acción no se puede deshacer. ¿Desea continuar?",
      icon: "warning",
      button: "Sí",
  }).then((result) => {
    if (result.value) {
        fetch("/usuarios/borrar/"+id, {
            method:"DELETE"
          }).then (function () {
            Swal.fire({
                title: "Cuenta eliminada",
                text: "La información ha sido eliminada con éxito",
                icon: 'success',
            }).then ((result) => {
              window.location.href = "../../../index.html"
          })
          })
    }
  })

}
