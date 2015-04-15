/**
 * Created by michaelt on 4/12/15.
 */

app.RestItem = Backbone.Model.extend({
    defaults: {
        'name':'Roach Patrol',
        'style':'bootstrapers'
    }
});

app.restItem = new app.RestItem({});