function getZip(url) {
	var zipString = window.location.search.substring(1);
	var variableArray = zipString.split('&');
	for(var i = 0; i<variableArray.length; i++){
		var pair = variableArray[i].split('=');
		if (pair[0] == url) {
			return pair[1];
		}
	}
}
	 
var geocoder;
var marker, i;
var zipLat;
var zipLng;

var zipLocation = {};


function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
    zoom: 14
  };
	geocoder.geocode({
	address: getZip('zipcode')
	}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			zipLat = results[0].geometry.location.lat();
			console.log(zipLat);
			zipLng = results[0].geometry.location.lng();
			console.log(zipLng);
			//set lat and lng in the opt object from capstone.js
			opt = {"lat": zipLat, "lng": zipLng};
			console.log(opt);
			zipLocation = {latitude: zipLat, longitude: zipLng};
			new google.maps.Marker({
				map: map,
				position: results[0].geometry.location	
				})
		} else {
			alert('Geocode was not successful');
				}

				/* Loop for hard coded lat and long test locations */

			// for (i = 0; i < locations.length; i++) {
		 //    marker = new google.maps.Marker({
		 //    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		 //    map: map
		 //  	});
  	// 	}
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


/* test hard coded lat and long 

var locations = [
        ['Portland',  45.5236111, -122.675, 4],
        ['Pittok Mansion', 45.5250, -122.7164],
        ['Council Crest', 45.5001, -122.7093	]
    ];

    */

// /* Loops thru restaurant results and lists address */

// function address() {
// 	for(var x = 0; x < restaurants.results.length; x++) {
// 		for(var key in restaurants.results[x].address) {
// 			console.log(restaurants.results[x].address[key]);
// 		}
// 		//console.log(restaurants.results[x].address);
// 	}
// }

    

	

