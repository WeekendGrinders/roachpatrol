/**
 * Created by michaelt on 4/13/15.
 */
app.templates = {};

app.templates.main = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Style: {{style}}</h2></li></ul>'
);

app.templates.list = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Score: {{score}}</h2><br><h2>Style: {{style}}</h2></li></ul>'
);

app.templates.map = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Style: {{style}}</h2></li></ul>'
);

app.templates.detail = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Style: {{style}}</h2></li></ul>'
);