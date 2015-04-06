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
    	})
        
       
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
    

	

