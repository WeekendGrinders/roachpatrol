/**
 * Created by michaelt on 4/12/15.
 */

rpApp.RestMainView = Backbone.View.extend({
    tagName: 'div',
    id: 'restMain',
    className: 'restMainView',
    render: function() {
        //var attributes = this.model.toJSON();
        this.$el.html(rpApp.templates.main);
        rpApp.restListView = new rpApp.RestListView({collection: this.collection});
        rpApp.restMapView = new rpApp.RestMapView({collection: this.collection});
        rpApp.restDetailView = new rpApp.RestDetailView({collection: this.collection});
        rpApp.restListView.render();
        rpApp.restMapView.render();
    }
});

rpApp.RestListView = Backbone.View.extend({
    tagName: 'div',
    id: 'restList',
    className: 'restListView',
    render: function() {
        //var attributes = this.model.toJSON();
        this.$el.html(rpApp.templates.list);
    }
});

rpApp.RestMapView = Backbone.View.extend({
    tagName: 'div',
    id: 'restMap',
    className: 'restMapView',
    render: function() {
        //var attributes = this.model.toJSON();
        this.$el.html(rpApp.templates.map);
    }
});

rpApp.RestDetailView = Backbone.View.extend({
    tagName: 'div',
    id: 'restDetail',
    className: 'restDetailView',
    render: function() {
        //var attributes = this.model.toJSON();
        this.$el.html(rpApp.templates.detail);
    }
});

$(function() {
    rpApp.restMainView = new rpApp.RestMainView(
        {model: rpApp.restItem}
    );
    rpApp.restMainView.render();
    console.log(rpApp.restListView.el);
    console.log(rpApp.restMapView.el);
});