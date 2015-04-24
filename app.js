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
var gMarkers = [];

function getLatLng() {
	//Getting latLng of requested zipcode and storing them in zipLat and zipLng
	geocoder = new google.maps.Geocoder();
	geocoder.geocode({
		address: getZip('zipcode')
	}, 
	function(results, status){
		if(status == google.maps.GeocoderStatus.OK) {
			zipLat = results[0].geometry.location.lat();
			console.log(zipLat);
			zipLng = results[0].geometry.location.lng();
			console.log(zipLng);

			//set lat and lng in the opt object from capstone.js
			opt = {"lat": zipLat, "lng": zipLng};
			zipLocation = {latitude: zipLat, longitude: zipLng};
			//make API GET request from capstone.js 
			roachPatrol.go();
		} else {
			//something went very wrong...
			alert('Geocode was not successful');
		}
	})
}

function initialize() {
	console.log("Rendering the map...");

	//setting center point and zoom level
	var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(zipLat, zipLng)
	};
  	
	//creating map
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var marker;
	//Initialize infoWindows for the markers
	var infowindow = new google.maps.InfoWindow();

	//Close any open infoWindow if the map is clicked (don't want more than one open at a time)
	google.maps.event.addListener(map, 'click', function() {
		infowindow.close();
	});


	//console.log(restaurants.results);

	//loop through ajax results and place markers on the map for each restaurant
	for(var i = 0; i < restaurants.results.length; i++) {
		console.log(
            'Name: ' + restaurants.results[i].name + '\n' +
            'InspectionID: ' + restaurants.results[i].inspection_number + '\n' +
            'Lat: ' + restaurants.results[i].location.Latitude + '\n' +
            'Long: ' + restaurants.results[i].location.Longitude + '\n'
        );
		//show info in sidebar
		$('.results').append('<div id="'+i+'" class="resultItem" onClick="getThis('+i+')"><span class="restName">' + restaurants.results[i].name + '</span><br><span class="restAddress">' + restaurants.results[i].address.street + '</span><span class="restScore"> Score:' + restaurants.results[i].score + '</span></div>');
		if ((i%2) != 0) {
			$('#'+i).css({background: "#CCC"});
		}
		//create markers
		marker = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(restaurants.results[i].location.Latitude, restaurants.results[i].location.Longitude),
			title: restaurants.results[i].name //hover pop-up name
		});

		//open the infoWindow for the restaurant when a marker is clicked
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				var inspectionNums = restaurants.results[i].inspection_number.join('_');
				infowindow.setContent('<h4>' + restaurants.results[i].name + '</h4> Score: ' +restaurants.results[i].score+ '<br><div class="inspectionNums" onClick="openReports(\''+inspectionNums+'\')"> Inspections reports: ' + restaurants.results[i].inspection_number+'</div>');
				infowindow.open(map, marker);
			}
		})(marker, i));
		gMarkers.push(marker);
	}
}

function openReports(arrString) {
	var inspection_numbers = arrString.split('_');
	console.log(inspection_numbers);
	console.log(arrString);
}

function getThis(marker) {
	console.log("Clicked a result..." + marker);
	google.maps.event.trigger(gMarkers[marker], "click");
}
