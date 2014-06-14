window.ChangeAccountViewAttr = Backbone.View.extend({
    tagName: "option",
 
    initialize: function(){
      _.bindAll(this, 'render');
    },
    render: function(){
      this.$el.attr('value', this.model['accountId']).html(this.model['accountName']);
      return this;
    }
  });
window.ChangeAccountView = Backbone.View.extend({
	
	events: {
            "click #save": "change",
    },
	template : _.template($('#changeAccount').html()),
	
    initialize: function(){
    	this.collection.fetch();
    	this.render();
    },
    render: function() {
    	$(this.el).html(this.template());
    	this.addAll();
    	return this;
    },
    addOne: function(acc){
        $(this.$el).find("#accSel").append(new ChangeAccountViewAttr({ model: acc }).render().el);
    },
    addAll: function(){
	  this.collection.toJSON().forEach(this.addOne, this);
    },
	change: function() {
		$account = this.$el.find($("#accSel")).val();
		selAccountId = $account;
		
		$.ajax({
		    url: 'http://www.moledor.ch/rest/v1/accounts/'+selAccountId,
			dataType: 'jsonp',
		    success: function (data) {
				console.log(data);
				selAccountName = data["accountName"];
				app.navigate("options", true);
			},
			error: function(msg) {
				console.log(msg);
			}
		  });
		app.navigate("options", true);
	}
});