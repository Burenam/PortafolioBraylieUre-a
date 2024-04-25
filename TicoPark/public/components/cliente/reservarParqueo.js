// fetch de provincias y cantones
window.onload = function () {
    fetch("https://ubicaciones.paginasweb.cr/provincias.json")
         .then(function(response){
             return response.json();
         })
         .then(function(json) {
             for (var key in json)
             document.getElementById("provincias").insertAdjacentHTML("beforeend", "<option value='"+key+"'>"+json[key]+"</option>");
         })
         .then (function (json) {
            fetch("https://ubicaciones.paginasweb.cr/provincia/1/cantones.json")
            .then(function(response){
                return response.json();
            })
            .then(function(json) {
                for (var key in json)
                document.getElementById("cantones").insertAdjacentHTML("beforeend", "<option value='"+key+"'>"+json[key]+"</option>");
               })
      })
}

function seleccionProvincia() {
    document.getElementById("cantones").innerHTML = "";
    var selectProvincias= document.getElementById("provincias");
    var provinciaSeleccionada = selectProvincias.options[selectProvincias.selectedIndex].value;
    fetch("https://ubicaciones.paginasweb.cr/provincia/"+provinciaSeleccionada+"/cantones.json")
         .then(function(response){
             return response.json();
         })
         .then(function(json) {
             for (var key in json)
             document.getElementById("cantones").insertAdjacentHTML("beforeend", "<option value='"+key+"'>"+json[key]+"</option>");
            })
   }


   function cantonLoad() { 

    // aqui se hace el fetch de los cantones de la provincia seleccionada


    document.getElementById("cantDrop").classList.remove("hidden");
    document.getElementById("provBot").setAttribute("onClick", "loadMap()");


}


/* MAPA */
mapboxgl.accessToken = 'pk.eyJ1IjoiYXJvamFzcTEiLCJhIjoiY2tkMTVjcTdxMDNlZDJ5bjkyZGZ6Z3pxcCJ9.-OZgjvX86q7ceHd_6h8LkQ';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-84.0907, 9.9281], //esto va en order long lat por alguna razon. añadir aquí las lat del canton seleccionado.
    zoom: 10,
});

var parqueosQuemados = []; //array con los resultados del json
var currentMarkers = []; //array con todos los markers

function loadMap() {
    //borra el contenido del mapa
    document.getElementById("listings").innerHTML="";
    document.getElementById("mapWrap").classList.remove("hidden");

    // se mueve a la provincia y añade markers
    var selectProvincias= document.getElementById("provincias");
    var provinciaSeleccionada = selectProvincias.options[selectProvincias.selectedIndex].value;

/*     if (provinciaSeleccionada == 1) {
        map.flyTo({
            center: {
                lng: [-84.0907],
                lat: [9.9281]
            },
            zoom: 11
        });
    }else if (provinciaSeleccionada == 2) {
        map.flyTo({
            center: {
                lng: [-84.2142],
                lat: [10.0159]
            },
            zoom: 11
        });
    } */

    addMarkers(provinciaSeleccionada);
}

function addMarkers(provinciaSeleccionada) {
    parqueosQuemados=[];
    // borra los markers que se hayan puesto
    if (currentMarkers!==null) {
        for (var i = currentMarkers.length-1; i >= 0; i--) {
          currentMarkers[i].remove();
        }
    } ; 

    var provincia;
    var vehiculo = document.getElementById("vehiculo").value;

    // aquí se extrae el valor del dropdown y se le asigna una provincia para hacer la comparación

    if (provinciaSeleccionada == 1) {
        provincia = "San José";
    }else if (provinciaSeleccionada == 2) {
        provincia = "Alajuela";
    }else if (provinciaSeleccionada == 3) {
        provincia = "Cartago";
    }else if (provinciaSeleccionada == 4) {
        provincia = "Heredia";
    }else if (provinciaSeleccionada == 5) {
        provincia = "Guanacaste";
    }else if (provinciaSeleccionada == 6) {
        provincia = "Puntarenas";
    }else if (provinciaSeleccionada == 7) {
        provincia = "Limón";
    }

    fetch('/parqueos/listar')
        .then(
            function (response) {
                return response.json(); //convierte el resultado a json
            }
        ).then(function (data) {            
            var k=0;
            for (i=0;i<data.length;i++) { // este desastre revisa el tipo de vehiculo y solo jala los parqueos que tengan campo, con suerte.                
                if (data[i].provincia == provincia) {
                    if (vehiculo == "carro") {
                        if (data[i].campoCarro) {
                            parqueosQuemados[k]=data[i];
                            k++;
                        }
                    }else if (vehiculo == "moto") {
                        if (data[i].campoMoto) {
                            parqueosQuemados[k]=data[i];
                            k++;
                        }
                    }else if (vehiculo == "bici") {
                        if (data[i].campoBici) {
                            parqueosQuemados[k]=data[i];
                            k++;
                        }
                    }else if (vehiculo == "bus") {
                        if (data[i].campoBus) {
                            parqueosQuemados[k]=data[i];
                            k++;
                        }
                    }else if (vehiculo == "camion") {
                        if (data[i].campoCamion) {
                            parqueosQuemados[k]=data[i];
                            k++;
                        }
                    }else if (vehiculo == "cuadra") {
                        if (data[i].campoCuadra) {
                            parqueosQuemados[k]=data[i];
                            k++;
                        }
                    }                    
                }
            }
        }). then ( function () {
            i = 0;             
        parqueosQuemados.forEach(function (marker) {

        /* Create a div element for the marker. */
        var el = document.createElement('div');
        /* Assign a unique `id` to the marker. */
        el.id = "marker-" + marker.id;
        /* Assign the `marker` class to each marker for styling. */
        el.className = 'marker';

        var oneMarker = new mapboxgl.Marker(el, {
                offset: [0, -23]
            })
            .setLngLat([parqueosQuemados[i].long, parqueosQuemados[i].lat])
            .addTo(map);
        i++;

        currentMarkers.push(oneMarker);

        /**
         * Listen to the element and when it is clicked, do three things:
         * 1. Fly to the point
         * 2. Close all other popups and display popup for clicked store
         * 3. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        el.addEventListener('click', function (e) {
            /* Fly to the point */
            flyToStore(marker);
            /* Close all other popups and display popup for clicked store */
            createPopUp(marker);
            /* Highlight listing in sidebar */
            var activeItem = document.getElementsByClassName('active');
            e.stopPropagation();
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            var listing = document.getElementById('listing-' + marker.id);
            listing.classList.add('active');
        });
    });
        })
        .then (function () {
            buildLocationList(parqueosQuemados);
            map.resize();
        })

    
}

function buildLocationList(parqueosQuemados) {
    for (i = 0; i < parqueosQuemados.length; i++) { //aquí falta agregar que solo enseñe los que sean parqueosQuemados.canton == a la seleccion del men
        /* Añade un listing nuevo a la seccion, le asigna el id correspondiente, y le mete la clase de item */
        var listings = document.getElementById('listings');
        var listing = listings.appendChild(document.createElement('div'));
        listing.id = "listing-" + parqueosQuemados[i].id;
        listing.className = 'item';

        /* Linkea al listing que se crea arriba */
        var link = listing.appendChild(document.createElement('a'));
        link.href = '#';
        link.className = 'title';
        link.id = "link-" + parqueosQuemados[i].id;
        link.innerHTML = parqueosQuemados[i].nombreParqueo;

        /* Rellena la info */
        var details = listing.appendChild(document.createElement('div'));
        details.innerHTML = parqueosQuemados[i].direccion;
        if (parqueosQuemados[i].tel) {
            details.innerHTML += ' · ' + parqueosQuemados[i].tel;
        }

        /**
         * Listen to the element and when it is clicked, do four things:
         * 1. Update the `currentFeature` to the store associated with the clicked link
         * 2. Fly to the point
         * 3. Close all other popups and display popup for clicked store
         * 4. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        link.addEventListener('click', function (e) {
            for (var i = 0; i < parqueosQuemados.length; i++) { //error
                if (this.id === "link-" + parqueosQuemados[i].id) {
                    var clickedListing = parqueosQuemados[i];
                    flyToStore(clickedListing);
                    createPopUp(clickedListing);
                }
            }
            var activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
                activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');

        });

    };
}

function flyToStore(currentFeature) {
    map.flyTo({
        center: {
            lng: [currentFeature.long],
            lat: [currentFeature.lat]
        },
        zoom: 15
    });
}



/* crea el pop up */
function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    var popup = new mapboxgl.Popup({
            closeOnClick: false
        })
        .setLngLat({
            lng: [currentFeature.long],
            lat: [currentFeature.lat]
        })
        .setHTML(`<h3> ${currentFeature.nombreParqueo} <br/> ${currentFeature.rating} <i class="fa fa-star" aria-hidden="true"></i></h3>
            <h4> ${currentFeature.canton}  || <a href="#"  class="reservar" onclick="llenarDatos(id)" id="${currentFeature.permiso}">Reservar</a></h4>`)
        .addTo(map);
}



/* MATRIZ */

const llenarDatos = (id) => {
    fetch('/parqueos/listar')
    .then(
        function(response) {
            return response.json();
        }        
    )
    .then( function (json) {
        for (i=0;i<json.length;i++) {
            if (json[i].permiso == id) {
                document.getElementById("nombreParqueo").innerHTML = json[i].nombreParqueo; 
                document.getElementById("telParqueo").innerHTML = json[i].tel; 
                document.getElementById("dirParqueo").innerHTML = json[i].direccion; 
            }
        }
    }).then( function () {
        createMat(id);
    })
}

var matriz = Array(10);
for (i = 0; i < matriz.length; i++) {
    matriz[i] = Array(10).fill("<p class='espacioGris'>O</p>");
};

var camposTot;
var camposDisp;

const createMat = (id) => {
    fetch('/parqueos/espacios')
    .then(function (response) {
        return response.json();
    })
    .then(function (json) { 
        for (i=0;i<json.length;i++) {
            if (json[i].idParqueo == id) {
                campos
            }
        }
    })
    .catch(function (error) {
        console.log(error);
    })    
}

function addTable() {
    var table = document.getElementById("matriz");
    for (var i = 0; i < 10; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < 10; j++) {
            var col = document.createElement("td");
            col.innerHTML = matriz[i][j]; // llena la tabla con cada espacio de la matriz
            row.appendChild(col);
        }
        table.appendChild(row);
    }
}


function showMat(id) {
    addTable(matriz);
    document.getElementById("contMat").classList.remove("hidden");
}

function checkIn() {

    var table = document.getElementById("matriz");

    table.rows[0].cells[0].innerHTML = ("<p class='pRed'>X</p>");

    Swal.fire({
        icon: 'success',
        title: 'Reservación confirmada',
        text: 'Gracias por su preferencia',
    })
    .then((value) => {
        if (value) {
            window.location.href = '../reservaciones/reservaciones.html'
        }
    })

}

function cancelar() {
    var table = document.getElementById("matriz");
    table.innerHTML = "";
    document.getElementById("contMat").classList.add("hidden");

}

function reservar() {
    window.location.href = '../reservar/reservar.html'
}