/**
 * Created by michaelt on 4/12/15.
 */

app.Restaurant = Backbone.Model.extend({
    defaults: {
        name:'Roach Patrol',
        style:'bootstrappers'
    }
});

app.restaurant = new app.Restaurant({});

app.RestaurantList = Backbone.Collection.extend({
    url: '/restaurants',
    model: app.Restaurant,
    initialize: function() {
        this.on('remove', this.hideModel);
    },
    hideModel: function(model) {
        model.trigger('hide');
    }
});

app.restaurantList = new app.RestaurantList({});
app.restaurantList.fetch({data: {lat:45.584332000, lng:-122.728474000}});