window.HomeView = Backbone.View.extend({

	initialize : function() {
		this.render();
	},
	template : _.template($('#home').html()),

	render : function(eventName) {
		var that = this;
		$(that.el).html(this.template());
		
		this.posCol = new PositionCollection();
		var posColView = new PositionColView({collection: this.posCol});
		that.$el.find(".contentTable").append(posColView.render().el);
		
		return that;
	}
});

// von hier Raus
window.OptionsView = Backbone.View.extend({

	template : _.template($('#options').html()),

	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	}
});

window.ChangeBalanceView = Backbone.View.extend({

	template : _.template($('#changeBalance').html()),

	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	}
});