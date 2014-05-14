window.PositionColView = Backbone.View.extend({
	tagName : 'table',
	
	
    initialize: function() {
	  this.collection.on('change', this.render, this);
	  this.collection.on('add', this.render, this);
	  this.collection.on('reset', this.render, this);
      this.collection.fetch({reset: true, async: false, dataType: 'jsonp'});
    },
    
	render: function() {
	  this.collection.forEach(this.addOne, this);
	  return this;
	},

	addOne: function(posItem) {
		var positionView = new PositionView({model: posItem});
		this.$el.append(positionView.render().el);
	}
});