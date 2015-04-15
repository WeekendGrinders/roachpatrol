/**
 * Created by michaelt on 4/12/15.
 */

app.RestMainView = Backbone.View.extend({
    id: 'restMain',
    className: 'restMainView',
    render: function() {
        var attributes = this.model.toJSON();
        console.log(attributes);
        this.$el.html(app.templates.main(attributes));
        app.restListView = new app.RestListView({model: app.restItem});
        app.restMapView = new app.RestMapView({model: app.restItem});
        app.restDetailView = new app.RestDetailView({model: app.restItem});
        app.restListView.render();
        app.restMapView.render();
        app.restDetailView.render();
    }
});

app.RestListView = Backbone.View.extend({
    id: 'restList',
    className: 'restListView',
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.list(attributes));
    }
});

app.RestMapView = Backbone.View.extend({
    id: 'restMap',
    className: 'restMapView',
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.map(attributes));
    }
});

app.RestDetailView = Backbone.View.extend({
    id: 'restDetail',
    className: 'restDetailView',
    render: function() {
        var attributes = this.model.toJSON();
        this.$el.html(app.templates.detail(attributes));
    }
});

$(function() {
    app.restMainView = new app.RestMainView(
        {model: app.restItem}
    );
    app.restMainView.render();
    console.log(app.restMainView.el);
    console.log(app.restListView.el);
    console.log(app.restMapView.el);
    console.log(app.restDetailView.el);
});