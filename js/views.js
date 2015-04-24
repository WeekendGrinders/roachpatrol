app.RestaurantHomeView = Backbone.View.extend({
    id: 'restaurantHome',
    className: 'restaurantHomeView',
    events: {
        'click #goButton': 'submit',
    },
    initialize: function() {

    },
    submit: function() {
        var zipcode = $('#zipList').val();
        this.getLatLng(zipcode);
    },
    getLatLng: function(zipcode) {
        geocoder = new google.maps.Geocoder();
        geocoder.geocode({address: zipcode},
            function(results, status){
                if(status == google.maps.GeocoderStatus.OK) {
                    zipLat = results[0].geometry.location.lat();
                    console.log(zipLat);
                    zipLng = results[0].geometry.location.lng();
                    console.log(zipLng);

                    //set lat and lng in the opt object from capstone.js
                    opt = {"lat": zipLat, "lng": zipLng};
                    zipLocation = {latitude: zipLat, longitude: zipLng};
                    //make API GET request from capstone.js
                    roachPatrol.go();
                } else {
                    //something went very wrong...
                    alert('Geocode was not successful');
                }
            })
    },
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.home(attributes));
    }
});

app.RestaurantMainView = Backbone.View.extend({
    id: 'restaurantMain',
    className: 'restaurantMainView',
    render: function() {
        console.log(this.model.attributes);
        var attributes = this.model.toJSON();
        console.log(attributes);
        this.$el.html(app.templates.main(attributes));
        app.restaurantListView = new app.RestaurantListView({collection: app.restaurantList});
        //app.restaurantMapView = new app.RestaurantMapView({model: app.restaurant});
        //app.restaurantDetailView = new app.RestaurantDetailView({model: app.restaurant});
        app.restaurantListView.render();
        //app.restaurantMapView.render();
        //app.restaurantDetailView.render();
    }
});

app.RestaurantView = Backbone.View.extend({
    tagName: 'li',
    className: 'restaurantView',
    initialize: function() {
        this.id = this.el.id;
        this.model.on('hide', this.remove, this);
    },
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.restaurant(attributes));
    }
});

app.RestaurantListView = Backbone.View.extend({
    tagName: 'ul',
    id: 'restaurantList',
    className: 'restaurantListView',
    collection: app.restaurantList,
    initialize: function() {
        this.collection.on('add', this.addRestaurant, this);
        this.collection.on('reset', this.addAll, this);
        this.restaurants = [];
        for (var i = 0; i < app.restaurantList.length; i++) {
            var restaurant = new app.Restaurant({el: '#restaurant-' + i});
            this.restaurants.push(restaurant);
        }
    },
    addRestaurant: function(restaurant) {
        app.restaurantView = new app.RestaurantView({model: restaurant});
        this.$el.append(app.restaurantView.render());
        console.log(app.restaurantView.el);
    },
    addAll: function() {
        this.collection.forEach(this.addRestaurant, this);
    },
    render: function() {
        this.addAll();
    }
});

app.RestaurantMapView = Backbone.View.extend({
    id: 'restaurantMap',
    className: 'restaurantMapView',
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.map(attributes));
    }
});

app.RestaurantDetailView = Backbone.View.extend({
    id: 'restaurantDetail',
    className: 'restaurantDetailView',
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.detail(attributes));
    }
});

//$(function() {
//    app.restaurantHomeView = new app.RestaurantHomeView({model: app.restaurant});
//    app.restaurantHomeView.render();
//    $('#app').html(app.restaurantHomeView.el);
    //app.restaurantMainView = new app.RestaurantMainView({model: app.restaurant});
    //app.restaurantMainView.render();
    //console.log(app.restaurantMainView.el);
    //console.log(app.restaurantListView.el);
    //console.log(app.restaurantMapView.el);
    //console.log(app.restaurantDetailView.el);
    //app.restaurantListView = new app.RestaurantListView({collection: app.restaurantList});
    //app.restaurantListView.render();
    //console.log(app.restaurantListView.el);
//});