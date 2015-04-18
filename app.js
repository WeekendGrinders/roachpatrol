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
var restaurants = {};
var locations = [];

function initialize() {
	geocoder = new google.maps.Geocoder();
	var mapOptions = {
    	zoom: 14
  	};
	geocoder.geocode({
	address: getZip('zipcode')
	}, function(results, status){
		if(status == google.maps.GeocoderStatus.OK) {
			//map.setCenter(results[0].geometry.location);
			zipLat = results[0].geometry.location.lat();
			console.log(zipLat);
			zipLng = results[0].geometry.location.lng();
			console.log(zipLng);
			//set lat and lng in the opt object from capstone.js
			opt = {"lat": zipLat, "lng": zipLng};
			//console.log(opt);
			roachPatrol.go();
			zipLocation = {latitude: zipLat, longitude: zipLng};
			// new google.maps.Marker({
			// 	map: map,
			// 	position: results[0].geometry.location	
			// 	})
		} else {
			alert('Geocode was not successful');
				}

				
			})

	//var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);  
}


// Loops thru restaurant results logs lat lng

function renderMap() {
	console.log("Rendering the map...");

	var mapOptions = {
    	zoom: 14,
    	center: new google.maps.LatLng(zipLat, zipLng)
  	};

	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	console.log(restaurants.results);

	for(var i = 0; i < restaurants.results.length; i++) {
		console.log('Lat: ' + restaurants.results[i].location.Latitude + ' ' + 'Long: ' +restaurants.results[i].location.Longitude);
		new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(restaurants.results[i].location.Latitude, restaurants.results[i].location.Longitude)
		});
	}
}

    

	

