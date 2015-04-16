var st = require('st');
var request = require("request");
var http = require('http');
var Router = require("routes-router");
var router = Router(); 

var body = '';

function api(response, query) {
	var slicedQuery = query.split('=');
	var lat = slicedQuery[1].substring(0, slicedQuery[1].length - 4);
	var lng = slicedQuery[2];
	var lngLat = lng + "," + lat;

	console.log("lng: " + lng);
	console.log("lat: " + lat);
	console.log("lngLat: " + lngLat);

	http.get("http://api.civicapps.org/restaurant-inspections/near/" + lngLat + "?distance=5&count=20000", function (res) {
		console.log("Got response: " + res.statusCode);
		res.on('data', function (chunk) {
		   	body += chunk;
		   	console.log("---------------Recieved a chunk of data from API--------------");
		});
		res.on('end', function () {
			console.log(body);
		   	var obj = JSON.parse(body);
		   	console.log("---------------closing connection with server--------------");
		   	response.end(body);
		});
		res.on('error', function (e) {
		   	console.log("Got error: " + e.message);
		});
	});
	console.log("---------------End of API function--------------");
	console.log(body);
	return true;
};

router.addRoute("/go", {
	GET: function(req,res,opts) {
		var promise = {};
		console.log("---------------Calling GET function--------------");
		console.log(opts.parsedUrl.query);
		api(res,opts.parsedUrl.query);
		console.log("---------------Passing data to client--------------");
		console.log("---------------Finished Sending data to the client--------------");
	}
});

var indexFile = process.argv[2] || 'index';

router.addRoute("/*", st({
  path: __dirname,
  index:'/'+indexFile+'.html' //allows alternative files
}));

var server = http.createServer(router);
console.log('server listening on port # 8080');
server.listen(8080);

