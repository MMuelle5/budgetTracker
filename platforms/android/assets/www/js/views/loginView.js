window.LoginView = Backbone.View.extend({
	template : _.template($('#login').html()),

	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	}
});