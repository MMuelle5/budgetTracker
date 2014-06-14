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
		that.$el.find(".contentTable").html("");
		that.$el.find(".contentTable").append(posColView.render().el);
		
		console.log(selAccountName);
		that.$el.find("#homeTitle").html(selAccountName);
		console.log($("#homeTitle"));
		
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
