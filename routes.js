/**
 * Created by michaelt on 4/4/15.
 */

var http = require('http');

function home(req, res) {
        return http.get("http", {
            host: "api.civicapps.org",
            path: "/restaurant-inspections/"
        }, function (response) {
            //res.setEncoding("utf8");
            var body = "";
            response.on("data", function (d) {
                body += d;
            });
            response.on("end", function () {
                try {
                    var parsed = JSON.parse(body);
                } catch (err) {
                    console.error('Unable to parse response as JSON', err);
                    return cb(err);
                }
                res.write(parsed.results.name)
            });
            response.on("error", function (err) {
                console.error('Error with the request:', err.message);
            });
        });

        //res.writeHead(200, {'Content Type': 'text/plain'});
        //res.write("Header\n");
        //res.write(parsed + "\n\n\n");
        //res.end("Footer\n");
}

module.exports.home = home;