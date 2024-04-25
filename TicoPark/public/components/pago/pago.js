/* MAPA */
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJvamFzcTEiLCJhIjoiY2tkMTVjcTdxMDNlZDJ5bjkyZGZ6Z3pxcCJ9.-OZgjvX86q7ceHd_6h8LkQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-84.127862, 10.001693], //esto va en order long lat por alguna razon. añadir aquí las lat del canton seleccionado.
    zoom: 16,
    interactive: false
});

map.on('load', function () {
    addMarkers();
})

function addMarkers() {
    /* Create a div element for the marker. */
    var el = document.createElement('div');
    /* Assign the `marker` class to each marker for styling. */
    el.className = 'marker';

    new mapboxgl.Marker(el, {
            offset: [0, -23]
        })
        .setLngLat([-84.127862, 10.001693])
        .addTo(map);
};


function checkOut() {
    Swal.fire({
            icon: 'warning',
            title: 'Finalizar y pagar',
            text: '¿Está seguro que quiere finalizar su estadía?',
            showCancelButton: true,
        })
        .then((result) => {
            if (result.value) {
                window.location.href = '../reservaciones/reservaciones2.html'
            }else{

            }
        })
}