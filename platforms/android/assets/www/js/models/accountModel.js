window.AccountModel = Backbone.Model.extend({
	
	url: 'http://www.moledor.ch/rest/v1/accounts',
	createUrl: function() {
		return 'http://www.moledor.ch/rest/v1/accounts/create';
	},
	remove: function() {
		this.destroy();
	},
	add: function() { //cross-domain erlaubt nur get-services
		$.ajax({
		    url: this.createUrl(),
			dataType: 'jsonp',
		    data: {accountName: this.accountName},
		    success: function (data) {
				console.log(data);
			},
			error: function(msg) {
				console.log(msg);
			}
		  });
	},
});