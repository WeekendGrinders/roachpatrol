/**
 * Created by michaelt on 4/12/15.
 */

app.Restaurant = Backbone.Model.extend({
    defaults: {
        name:'Roach Patrol',
        style:'bootstrapers'
    },
    initialize: function() {
        this.model.on('hide', this.remove, this);
    }
});

app.restaurant = new app.Restaurant({});

app.RestaurantList = Backbone.Collection.extend({
    //url: '/query',
    //model: app.Restaurant,
    initialize: function() {
        this.on('remove', this.hideModel);
    },
    hideModel: function() {
        model.trigger('hide');
    }
});

app.restaurantList = new app.RestaurantList({});
//app.restaurantList.fetch();

var testSet = [
    {name:'Dive 1', score:75},
    {name:'Dive 2', score:80},
    {name:'Dive 3', score:85},
    {name:'Dive 4', score:90},
    {name:'Dive 5', score:95},
];

app.restaurantList.reset(testSet);