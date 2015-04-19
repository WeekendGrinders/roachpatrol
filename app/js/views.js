/**
 * Created by michaelt on 4/12/15.
 */

app.RestaurantMainView = Backbone.View.extend({
    id: 'restaurantMain',
    className: 'restaurantMainView',
    render: function() {
        console.log(this.model.attributes);
        var attributes = this.model.toJSON();
        console.log(attributes);
        this.$el.html(app.templates.main(attributes));
        app.restaurantListView = new app.RestaurantListView({collection: app.restaurantList});
        app.restaurantMapView = new app.RestaurantMapView({model: app.restaurant});
        app.restaurantDetailView = new app.RestaurantDetailView({model: app.restaurant});
        app.restaurantListView.render();
        app.restaurantMapView.render();
        app.restaurantDetailView.render();
    }
});

app.RestaurantView = Backbone.View.extend({
    id: 'restaurant',
    className: 'restaurantView',
    initialize: function() {
        this.model.on('hide', this.remove, this);
    },
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.list(attributes));
    }
});

app.RestaurantListView = Backbone.View.extend({
    id: 'restaurantList',
    className: 'restaurantListView',
    collection: app.restaurantList,
    initialize: function() {
        this.collection.on('add', this.addRestaurant, this);
        this.collection.on('reset', this.addAll, this);
    },
    addRestaurant: function(restaurant) {
        app.restaurantView = new app.RestaurantView({model: restaurant});
        this.$el.append(app.restaurantView.render().el);
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

$(function() {
    app.restaurantMainView = new app.RestaurantMainView({model: app.restaurant});
    app.restaurantMainView.render();
    console.log(app.restaurantMainView.el);
    console.log(app.restaurantListView.el);
    //console.log(app.restaurantMapView.el);
    //console.log(app.restaurantDetailView.el);
});