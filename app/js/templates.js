/**
 * Created by michaelt on 4/13/15.
 */
rpApp.templates = {};

rpApp.templates.main = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Version: {{version}}</h2></li></ul>'
);

rpApp.templates.list = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Version: {{version}}</h2></li></ul>'
);

rpApp.templates.map = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Version: {{version}}</h2></li></ul>'
);

rpApp.templates.detail = _.template(
    '<ul><li><h1>{{ name }}</h1><br><h2>Version: {{version}}</h2></li></ul>'
);