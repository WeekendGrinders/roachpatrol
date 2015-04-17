// var url = 'http://api.civicapps.org/restaurant-inspections/';

// function go() {
// 	var results;

// 	$.ajax({
// 		type : "Get",
//     	url : url,
//     	dataType :"xml",
//     	data: {},
//     	success : function(data){
//         	alert(data);},
//     	error : function(httpReq,status,exception){
//         	alert(status+" "+exception);
//     	}
//     });

//     function myCallBack (data) {
//     	console.log("here");
// 		return data;
// 	}
// }

var restaurants = {};
var opt = {};


var roachPatrol = {
	url: '/go',
	go: function() {
		$.ajax({
			url: this.url,
			data: opt,
			method: 'GET',
			dataType: 'json',
			error : function(httpReq,status,exception){
        		alert(status+" "+exception);
    		}
		}).done(acceptResponse)
	}
}

function acceptResponse(data, status, jqXHR) {
	console.log('Response data: ');
	console.log(data);
	console.log('Data type: '+ typeof data);
	console.log('Response status: '+status);
	console.log(jqXHR);
	restaurants = data;

	if (restaurants[0] == undefined){
		for (var i = 0; i < restaurants.results.length; i++) {
			$('#here').append('<div>'+i+ ' - '+restaurants.results[i].name+' Score:' +restaurants.results[i].score+ ' ID: '+restaurants.results[i].id+'</div> ');
		};
	} else {
		console.log("No results...");
	};
}

