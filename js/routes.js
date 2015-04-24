app.Router = Backbone.Router.extend({
    routes: {
        "": "index",
        "restaurants/:id": "showRestaurants",
        "restaurants/:near": "showNear",
        "restaurants/:zipcode": "showZipcode"
    },
    initialize: function(options) {
        // Render and load the home view
        app.restaurantHomeView = new app.RestaurantHomeView({model: app.restaurant});
        app.restaurantHomeView.render();
        $('#app').html(app.restaurantHomeView.el);

        // Instantiate the list to load the collection
        this.restaurantList = new app.RestaurantList();
        this.restaurantListView = new app.RestaurantListView({collection: this.restaurantList});
        //$('#app').append(this.restaurantListView.el);
    },
    start: function() {
        Backbone.history.start({pushState: true})
    },
    index: function() {
        this.restaurantList.fetch();
    },
    showRestaurants: function(id) {
        this.app.restaurantList.focusOnRestaurant(id);
    },
    showNear: function(near) {

    },
    showZipcode: function(zipcode) {

    }
});

$(function() {
    window.app = new app.Router();
    app.start();
});
