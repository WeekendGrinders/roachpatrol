/*
function go() {
	$.ajax({ url: 'http://api.civicapps.org/restaurant-inspections', type: 'GET', 	dataType: 'jsonp',
	 success: (function(data) {
			console.log('hello');
	 })
	})
}

*/

function go() {
$.getJSON("apidata.js", function(data){
	      $.each(data, function(key, val){
        $("body").append('<h3>' + key + ":" + " " + val + '</h3>');
				});
		});
}