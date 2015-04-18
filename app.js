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
			//console.log(opt);
			roachPatrol.go();
			zipLocation = {latitude: zipLat, longitude: zipLng};
			new google.maps.Marker({
				map: map,
				position: results[0].geometry.location	
				})
		} else {
			alert('Geocode was not successful');
				}

				
			//loop through results
			for(i=0; i<restaurants.results.length; i++){
				//creates resteraunt markers
				marker = new google.maps.Marker({
				position: new google.maps.LatLng(
					restaurants.results[x].location.Latitude,
					restaurants.results[x].location.Longitude),
					map: map	
				});
			}
		})

  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);  
}



/*
// Loops thru restaurant results logs lat lng

function restaurantLocation() {
	var mapOptions = {
    zoom: 14
  };
	var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions); 

	for(var x = 0; x < restaurants.results.length; x++) {
		console.log('Lat: ' + restaurants.results[x].location.Latitude + ' ' + 'Long: ' +restaurants.results[x].location.Longitude);
		new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(restaurants.results[x].location.Latitude,
				restaurants.results[x].location.Longitude)
				
		});
	}
}

*/



    

	

