/**
 * Created by michaelt on 4/4/15.
 */
var http = require('http');
//var routes = require('./routes.js');
var port = 3000;


http.createServer(function(req, res) {
    http.get("http://api.civicapps.org/restaurant-inspections/", function (res) {
        console.log("Got response: " + res.statusCode);
        var body = "";
        res.on('data', function (chunk) {
            body += chunk;
            console.log(body);
        });
        res.on('end', function () {
            var obj = JSON.parse(body);
            console.log("This proves I know WTF is going down: " + obj.results[0].name);
            for (var i = 0; i < obj.results.length; i++) {
                console.log(obj.results[i].name + " " + obj.results[i].restaurant_id);
            }
        });
        res.on('error', function (e) {
            console.log("Got error: " + e.message);
        });
    })
}).listen(port);
console.log("Server running on localhost on port " + port);
