mapboxgl.accessToken = 'pk.eyJ1IjoiYXJvamFzcTEiLCJhIjoiY2tkMTVjcTdxMDNlZDJ5bjkyZGZ6Z3pxcCJ9.-OZgjvX86q7ceHd_6h8LkQ';
/** 
 * Add the map to the page
 */
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-84.049688, 9.955529], //esto va en order long lat por alguna razon
    zoom: 13,
});

var parqueosQuemados;

window.onload = function() { //carga de la base de datos los parqueos que hay y los mete en el array parqueosQuemados
    fetch('/parqueos/listar', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(data => parqueosQuemados = data) //convierte el json a un objeto
    .then(() => console.log(parqueosQuemados))
}

map.on('load', function () {
    addMarkers();
});

function addMarkers() {
    for (i = 0; i < parqueosQuemados.length; i++) {
        new mapboxgl.Marker()
            .setLngLat([parqueosQuemados[i].long, parqueosQuemados[i].lat])
            .addTo(map);
    }
};