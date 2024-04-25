// Columnas AG Grid
const columnDefinitions = [
    { field: "misEventos", headerName: "Mis Eventos", cellStyle: { textAlign: "left" } },
    { field: "tipoBoleto", headerName: "Tipo de Boleto", cellStyle: { textAlign: "left" } },
    { field: "ganancias", headerName: "Ganancias", cellStyle: { textAlign: "left" } }
];
// Opciones AG Grid
const gridOptions = {
    columnDefs: columnDefinitions,
    rowData: [],
    rowSelection: 'single',
    defaultColDef: { sortable: true, filter: true },
};

//PDF
let gridData = [];
const pdfName = "ReporteRendimientoPersonal.pdf";
const reportTitle = "Reporte de rendimiento personal";

//grid desde DB
function loadData(userID) {
    $.ajax({
        url: '/Reportes/GetGananciasGestor',
        method: 'GET',
        dataType: 'json',
        data: { userID: userID },
        success: function (data) {
           // console.log(data[0]);
            const datosNecesarios = data.map(item => ({
                misEventos: item.eventoNombre,
                tipoBoleto: item.tipoBoletoNombre,
                ganancias: item.ganancias
            }));
            //console.log(datosNecesarios);
            gridData = datosNecesarios;
            gridOptions.api.setRowData(datosNecesarios);
        },
        error: function (error) {
            console.log('Error al cargar los datos: ', JSON.stringify(error));
        }
    });
}

// Inicializa el AG Grid cuando el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    var userID = document.getElementById('myGrid').getAttribute('data-userid');
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
    loadData(userID);
});
