$(document).ready(function() {
	//$('#overlay').show();
	})


$('button').click(function(){
	$('#overlay').hide();
});

function getZip() {
	var x = document.getElementById("zip").value;
	google.maps.event.addDomListener(window, 'load', initialize);
}
	 
var geocoder;
var marker, i;

function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
    zoom: 14
  };
	geocoder.geocode({
	address: document.getElementById("zip").value
	}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			new google.maps.Marker({
				map: map,
				position: results[0].geometry.location	
				})
		} else {
			alert('Geocode was not successful');
				}

			for (i = 0; i < locations.length; i++) {
		    marker = new google.maps.Marker({
		    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		    map: map
		  	});
  		}
/*
   		google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        		}
    			})(marker, i)); */
			})

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}


/* test hard coded lat and long */

var locations = [
        ['Portland',  45.5236111, -122.675, 4],
        ['Pittok Mansion', 45.5250, -122.7164],
        ['Council Crest', 45.5001, -122.7093	]
    ];
    

	

