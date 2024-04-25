function borrar () {
    Swal.fire({
        title: 'Esta seguro(a) que desea remover al cliente de su parqueo?',

        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Cliente removido',
            'El espacio ha sido liberado',
            'success'
          ).then ((result) => {
              document.getElementById('contenido_tabla').deleteRow(0);
      })
        }
      })
      
}
