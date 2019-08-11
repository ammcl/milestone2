function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -33.929 , lng: 18.4174}
    });
    
    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    // Add some markers to the main map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
       var markers = locations.map(function(location, i) {
       return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
        });
       });
    
    
    
    // Add a marker clusterer to manage the markers on the main south african map.
    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
    }
    var locations = [
       {lat: -33.9616, lng: 18.4100}, //Table Mountain Capetown//
       {lat: -32.2667, lng: 24.4929}, //Camdeboo National Park Valley of Desolation//
       {lat: -32.2195, lng: 25.4798}, //Mount Zebra National Park//
       {lat: -33.4825, lng: 25.7561}, //Addo Elephant National Park//
       {lat: -33.8424, lng: 23.4528}, //Garden Route National Park//
       {lat: -34.8269, lng: 20.0071}, //L'Agulhas National Park//
    
       
      
    ]
    
    function moveMap() { //This will change map when the relevant one is choosen from the drop down list.//
       switch (document.getElementById("areaSelect").value) {
          case 'table':
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -33.9616, lng: 18.4100}, //Table Mountain Cape Town//
                    zoom: 10
                });
                break;
           case 'camdeboo':
               map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -32.2667, lng: 24.4929}, //Camdeboo National Park Valley of Desolation//
                   zoom: 10
               });
               break;
          case 'mount':
               map = new google.maps.Map(document.getElementById('map'), {
                   center: {lat: -32.2195, lng: 25.4798}, //Mount Zebra National Park//
                   zoom: 10
                });
               break;
               case 'addo':
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -33.4825, lng: 25.7561}, //Addo Elephant National Park//
                    zoom: 10
                });
                break;
                case 'garden':
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: -33.8424, lng: 23.4528}, //Garden Route National Park//
                        zoom: 10
                    });
                    break;
                case 'laghlas':
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: {lat: -34.8269, lng: 20.0071}, //L'Agulhas National Park//
                        zoom: 11
                     });
                    break;
            default:
        }
    }
    
    