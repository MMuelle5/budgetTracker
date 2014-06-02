window.PositionCollection = Backbone.Collection.extend({
	model: PositionModel,
	url: function() {
		$url = 'http://www.moledor.ch/rest/v1/accounts/'+selAccountId+'/positions?callback=?';
		return $url;
	},
	initialize: function(){
	    // this.on('remove', this.hide);
	    
	    
		// console.log('bla');
    	// // this.fetch({reset: true, dataType: 'jsonp'});
	    // console.log('blubb');
	    // console.log(this);
	    // console.log('dusse');
	    // $.each(this.models,function(i,model){
  		    // console.log(model);
		// });
	},
	hide: function(model) {
	  	model.trigger('hide'); 
	}
    // parse: function(dat) {
    	// console.log(dat);
        // return dat.data;
    // }
});
