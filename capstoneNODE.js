var st = require('st');
var request = require("request");
var http = require('http');
var Router = require("routes-router");
var router = Router(); 

// var serverResponse = {};

// var serverResponse = request("http://api.civicapps.org/restaurant-inspections/", function(error, response, body) {
// 		  serverResponse += body;
// 		  console.log(serverResponse)
// 		});



// console.log(serverResponse);

// router.addRoute("/go", {
// 	GET: function(req,res,opts) {
// 		console.log("Pulling data from API...");
// 		var serverResponse = '';

// 		var serverResponse = request("http://api.civicapps.org/restaurant-inspections/", function(error, response, body) {
// 					serverResponse += body;
// 					console.log('type = '+typeof body);
// 					console.log('type = '+typeof server);
// 					//console.log("Server Response: " + serverResponse);
// 					console.log("Server Response: " + serverResponse);
// 				});
// 		res.end(JSON.stringify(serverResponse));
// 		}
// });

var body = "";

   http.get("http://api.civicapps.org/restaurant-inspections/", function (res) {
       console.log("Got response: " + res.statusCode);
       res.on('data', function (chunk) {
           body += chunk;
           console.log(body);
       });
       res.on('end', function () {
           var obj = JSON.parse(body);
           console.log("This proves I know WTF is going down: " + obj.results[0].name);
       });
       res.on('error', function (e) {
           console.log("Got error: " + e.message);
       });
   });

router.addRoute("/go", {
	GET: function(req,res,opts) {
		res.end(body);
	}
});

var indexFile = process.argv[2] || 'capstone';

router.addRoute("/*", st({
  path: __dirname,
  index:'/'+indexFile+'.html' //allows alternative files
}));

var server = http.createServer(router);
console.log('server listening on port # 8080');
server.listen(8080);

