window.AccountCollection = Backbone.Collection.extend({
	model: AccountModel,
	url: 'http://www.moledor.ch/rest/v1/accounts?callback=?',
	initialize: function(){
	},
	hide: function(model) {
	  	model.trigger('hide'); 
	}
});