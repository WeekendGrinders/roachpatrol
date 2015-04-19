
var restaurants = {};
var opt = {};
var inspectionNum;  //should by dynamically assigning by looping through results
var report = {};

//Calling for inspection record around a certain latlong
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

//Calling for a specific inspection record
var restaurantInspection = {
	url: '/report',
	report: function() {
		$.ajax({
			url: this.url,
			data: inspectionNum,
			method: 'GET',
			dataType: 'json',
			error : function(httpReq,status,exception){
        		alert(status+" "+exception);
    		}
		}).done(inspectionReport)
	}
}

//Display and store data from API (for inspection records)
function acceptResponse(data, status, jqXHR) {
	console.log('Response data: ');
	console.log(data);
	console.log('Data type: '+ typeof data);
	console.log('Response status: '+status);
	console.log(jqXHR);
	restaurants = data;
	//renderMap();
	initialize();
}

//Display and store data from API (for inspection report)
function inspectionReport(data, status, jqXHR) {
	console.log('Response data: ');
	console.log(data);
	console.log('Data type: '+ typeof data);
	console.log('Response status: '+status);
	console.log(jqXHR);
	report = data;
}