window.PositionModel = Backbone.Model.extend({
	url: 'http://www.moledor.ch/rest/v1/accounts/22/positions?callback=?',
	createUrl: function() {
		return 'http://www.moledor.ch/rest/v1/accounts/'+selAccountId+'/positions/create';
	},
	// defaults: {
		// title : '',
		// amount : 0,
		// comment: ''
	// },
	remove: function() {
		this.destroy();
	},
	add: function() { //cross-domain erlaubt nur get-services
		// this.save({title: this.title, amount: this.amount});
		console.log(this);
		$.ajax({
		    url: this.createUrl(),
			dataType: 'jsonp',
		    data: {title: this.title, deposit: this.deposit, liftOff: this.liftOff},
		    success: function (data) {
				console.log(data);
			},
			error: function(msg) {
				console.log(msg);
			}
		  });
	},
	update: function() {
		
	},
	deleteModel: function() {
		
	}
});
