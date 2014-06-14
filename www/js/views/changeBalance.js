window.ChangeBalanceView = Backbone.View.extend({

	template : _.template($('#changeBalance').html()),
	events: {
            "click #save": "saveRecord",
    },
	render : function(eventName) {
		$(this.el).html(this.template());
		return this;
	},
	saveRecord: function() {
		$title = this.$el.find($("#title")).val();
		$amount = this.$el.find($("#amount")).val();
		$type = this.$el.find($("#type")).val();
		
		$exceptions = "";
		if(isNaN($amount)) {
			$exceptions = $exceptions+"<li>Der Wert muss numerisch sein</li>";
		}
		else if($amount > 1000000) {
			$exceptions = $exceptions+"<li>Der Wert darf maximal 1'000'000 betragen</li>";
		}
		if($title.length > 100) {
			$exceptions = $exceptions+"<li>Der Titel darf maximal 100 Zeichen lang sein</li>";
		}
		
		if($exceptions != "") {
			this.$el.find($("#exceptionList")).append($exceptions);
			this.$el.find($("#exceptions")).css("visibility", "visible");
		}
		else {
			this.$el.find($("#exceptionList")).html("");
			this.$el.find($("#exceptions")).css("visibility", "hidden");
			
			$model = new PositionModel();
			this.model.title = $title;
			if($type == 'Abheben') {
				this.model.liftOff = $amount;
			}
			else {
				this.model.deposit = $amount;
			}
			this.model.add();
			
			app.navigate("home", true);
		}
	}
});