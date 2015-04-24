/**
 * Created by michaelt on 4/13/15.
 */
app.templates = {};

app.templates.main = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Style: {{style}}</h2></li></ul>'
);

app.templates.list = _.template(
    '<li><h1>{{ name }}</h1><br><h2>Score: </h2><br><h2>Style: {{style}}</h2></li>'
);

app.templates.restaurant = _.template(
    '<h1>{{ name }}</h1><br><h2>Score: {{score}}</h2><br><h2>Style: {{style}}</h2>'
);

app.templates.map = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Style: {{style}}</h2></li></ul>'
);

app.templates.detail = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Style: {{style}}</h2></li></ul>'
);

app.templates.home = _.template(
    '<div class="container homepage">' +
        '<div class="row">' +
            '<div class="col-xs-12">' +
                '<h3>Roach Patrol</h3>' +
                '<h4>Find the health rating for Portland restaurants</h4>' +
                '<form action="page2.html" method="GET">' +
                '<div class="form-group">' +
                    '<label for="zipList">Pick a Zip Code</label>' +
                    '<select id="zipList" name="zipcode">' +
                        '<option>97203</option>' +
                        '<option>97212</option>' +
                        '<option>97201</option>' +
                        '<option>97202</option>' +
                        '<option>97204</option>' +
                        '<option>97205</option>' +
                        '<option>97206</option>' +
                        '<option>97209</option>' +
                        '<option>97210</option>' +
                        '<option>97211</option>' +
                        '<option>97212</option>' +
                        '<option>97213</option>' +
                        '<option>97214</option>' +
                        '<option>97215</option>' +
                    '</select>' +
                    '<button type="submit" id="goButton" value="submit" class="btn btn-primary btn-sm">Go!</button>' +
                        '<!--onclick="location.href = \"page2.html\";"-->' +
                '</div><!--form-->' +
                '</form>' +
            '</div><!--col-->' +
        '</div> <!-- row-- >' +
    '</div> <!-- container -->'
);