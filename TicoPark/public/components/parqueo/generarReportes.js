var tabla = document.getElementById("contenido_tabla");

const listarReportes = () => {
    fetch("/tarjetas/pagos", {
      method: "GET",
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
             
        for (i=0;i<data.length;i++) {
  
            /* Signo de dolar y llaves indica, en java moderno hipster, que todo eso es js DENTRO de HTML, dentro de comillas torcidas `` */
  
              var row =
              `
                      <tr>
                      <td> ${data[i].idTransaccion} </td>
                        <td> ${data[i].correo} </td>
                        <td> ${data[i].monto} </td>
                        <td> ${data[i].fecha} </td>
                        <td> ${data[i].horaStart} </td>
                        <td> ${data[i].horaEnd} </td>
                        <td> ${data[i].vehiculo} </td>
                      </tr>`;
                        tabla.insertAdjacentHTML('beforeend', row);
        }
      })
      .catch(function (error) {
        console.log(error);
    });
};