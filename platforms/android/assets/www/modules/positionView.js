window.PositionView = Backbone.View.extend({
	
    initialize: function() {
    },
    
    template:_.template($('#listElem').html()),

    render:function (eventName) {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }
});