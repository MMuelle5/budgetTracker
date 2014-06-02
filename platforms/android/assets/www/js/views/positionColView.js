window.PositionColView = Backbone.View.extend({
	tagName : 'table',
	
	
    initialize: function() {
	  this.collection.on('change', this.render, this);
	  this.collection.on('add', this.render, this);
	  this.collection.on('reset', this.render, this);
      this.collection.fetch({reset: true, async: false, dataType: 'jsonp'});
      this.totalDeposit = 0;
      this.totalLiftOff = 0;
    },
    
	render: function() {
      this.$el.html("<tr><td style='font-weight: bold'>Titel</td><td style='font-weight: bold'>Zufluss</td><td style='font-weight: bold'>Abfluss</td>");
	  this.collection.forEach(this.addOne, this);
	  posModel = new PositionModel();
	  posModel.set({title:"Total", deposit: this.totalDeposit.toFixed(2), liftOff: this.totalLiftOff.toFixed(2)});
	  var positionView = new PositionView({model: posModel});
	  this.$el.append(positionView.render().el);
	  return this;
	},

	addOne: function(posItem) {
		if(posItem.toJSON()['deposit'] != null) {
			this.totalDeposit = parseFloat(this.totalDeposit) + parseFloat(posItem.toJSON()['deposit']);
		}
		if(posItem.toJSON()['liftOff'] != null) {
			this.totalLiftOff += parseFloat(this.totalLiftOff) + parseFloat(posItem.toJSON()['liftOff']);
		}
		var positionView = new PositionView({model: posItem});
		this.$el.append(positionView.render().el);
	}
});