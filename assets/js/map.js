
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -33.929, lng: 18.417400000000043}, //Cape Town, South Africa
        zoom: 4,

    });
}

let locations = [{
        area: 'Table Mountain',
        lat: -33.9616,
        lng:  18.4100,
        },
       {
        area: 'Camdeboo National Park',
        lat: -32.2667,
        lng: 24.4929,
        },
        {
        area: 'Mount Zebra National Park',
        lat: -32.2195,
        lng:  25.4798,
        },
        {
        area: 'Addo National Park - Spekboom',
        lat: -33.2440,
        lng: 25.2975,
        },
        {
        area: 'Addo National Park - Nyathi',
        lat: -33.3845,
        lng:  25.7937,
        },
        {
        area: 'Garden Route - Storms River',
        lat: -34.0222,
        lng: 23.8962,
        },
        {
        area: 'Garden Route - Nature Valley',
        lat: -33.9695,
        lng:  23.5621,
        },
        {
        area: 'Garden Route - Diepwalle',
        lat:-33.9482,
        lng:  23.1573,
        },
        {
        area: 'Garden Route - Ebb & Flow',
        lat:-33.9482,
        lng:  -33.9897,
        },
        {
        area: 'LAgulhas National Park',
        lat: -34.8307,
        lng:  20.1235,
        },

];

function addMarker(props) {
    var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        animation: google.maps.Animation.DROP
    });

    if (props.content) {
        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });
        var myListener = marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
    }
}

function updateMarkers() {
    moveMap();
    createMarkers();
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }
}

function moveMap() {
    switch (document.getElementById("areaSelect").value) {
        case 'Addo':
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -33.2440, lng: -33.2440 }, //Addo National Park
                zoom: 10
            });
            break;
        case 'Mount':
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -32.2195, lng: -25.4798 }, //Mount Zebra
                zoom: 12
            });
            break;
        case 'Knysna':
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: -34.035431, lng: 23.046878 }, //Knysna
                zoom: 8
            });
            break;
        default:
    }
}

function deleteCheckmarks() {
    var checkmarks = document.getElementsByTagName("input");
for (var i = 0; i < checkmarks.length; ++i) { checkmarks[i].checked = false; }
}
