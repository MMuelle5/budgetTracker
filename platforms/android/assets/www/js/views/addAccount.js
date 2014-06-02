window.AddAccountView = Backbone.View.extend({
    initialize: function() {
    	console.log("blubb");
    },
    
    template:_.template($('#addAccount').html()),
	
	events: {
            "click #save": "saveRecord",
    },

    render:function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    
    saveRecord:function() {
    	
    	$accountName = this.$el.find($("#accountName")).val();
    	
		$model = new AccountModel();
		this.model.accountName = $accountName;
		this.model.add();
		
		app.navigate("options", true);
    }
});