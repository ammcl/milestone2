$(function () {

        function initMap() {
          var map = new google.maps.Map(document.getElementById('map'),
                  {
        zoom: 4,
        center: {lat: -33.929 , lng: 18.417400000000043}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
        });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }
        var locations = [
        {lat: -33.9616, lng: 18.4100}, //Table Mountain Capetown//
        {lat: -32.2667, lng: 24.4929}, //Camdeboo National Park Valley of Desolation//
        {lat: -32.2195, lng: 25.4798}, //Mount Zebra National Park//
        {lat: -33.2440, lng: 25.2975}, //Addo National Park - Spekboom//
        {lat: -33.3845, lng: 25.7937}, //Addo National Park - Nyathi//
        {lat: -34.0222, lng: 23.8962}, //Garden Route - Storms River//
        {lat: -33.9695, lng: 23.5621}, //Garden Route - Nature Valley//
        {lat: -33.9482, lng: 23.1573}, //Garden Route - Diepwalle//
        {lat: -33.9897, lng: 22.6085}, //Garden Route - Ebb & Flow//
        {lat: -34.8307, lng: 20.1235}, //L'Agulhas National Park //

        ]
    })