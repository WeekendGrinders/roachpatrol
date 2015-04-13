/**
 * Created by michaelt on 4/12/15.
 */

rpApp.RestItem = Backbone.Model.extend({
    defaults: {
        'name':'Roach Patrol',
        'version':'0.0.1'
    }
});

rpApp.restItem = new rpApp.RestItem({});
