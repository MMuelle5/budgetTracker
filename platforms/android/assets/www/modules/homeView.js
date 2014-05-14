window.HomeView = Backbone.View.extend({

	initialize : function() {
		var that = this;
		this._positionViews = [];

		this.collection.each(function(pos) {
			// console.log(pos);
			that._positionViews.push(new PositionView({
				model : pos,
				tagName : 'tr'
			}))
		});
	},
	template : _.template($('#home').html()),

	render : function(eventName) {
		// return this;
		var that = this;
		// Clear out this element.
		// $(this.el).empty();
		$(that.el).html(this.template());
// 
		// Render each sub-view and append it to the parent view's element.
		_(this._positionViews).each(function(dv) {
			$(that.el).find("#activities").append(dv.render().el);
		});
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
