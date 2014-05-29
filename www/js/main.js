
var AppRouter = Backbone.Router.extend({

    routes:{
        "":"home",
        "home":"home",
        "options":"options",
        "changeBalance":"changeBalance",
        "changeAccount":"changeAccount",
        "addAccount":"addAccount",
        "login":"login"
    },

    initialize:function () {
        // Handle back button throughout the application
        $('.back').live('click', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    home:function () {
        console.log('#home');
        this.checkLoggedIn(new HomeView(),false);
        
    	// this.changePage();
    },

    options:function () {
        console.log('#options');
        this.checkLoggedIn(new OptionsView(),false);
    },

    changeBalance:function () {
        console.log('#changeBalance');
    	// this.changePage(new ChangeBalanceView());
        this.checkLoggedIn(new ChangeBalanceView({model: new PositionModel()}),true);
    },
    
    changeAccount:function() {
        console.log('#changeAccount');
        this.accList = new AccountCollection();
        this.checkLoggedIn(new ChangeAccountView({collection: this.accList}),true);
    },
    
    addAccount:function() {
        console.log('#addAccount');
        this.checkLoggedIn(new AddAccountView({model: new AccountModel()}),true);
    },
    login:function() {
        console.log('#login');
		$that.changePage(new LoginView());
    },
    

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
    },
    
    checkLoggedIn: function(newView, isAllowedWithoutAccId) {
    	
    	$that = this;
    	$isLoggedIn = "";
    	$ret = $.getJSON( "http://www.moledor.ch/rest/v1/isLoggedIn?callback=?", function( data ) {
    		$retVal = JSON.parse(data);
    		console.log($retVal);
		    if(!$retVal.login) {
		    	// launchBrowser();
		        // console.log('#login');
		        // this.changePage(launchBrowser());
		        $isLoggedIn = false;
		    }
			else {
				$isLoggedIn = true;
			}
    	});
    	
		$ret.done(function(){
			if($isLoggedIn) {
				if((selAccountId != null && selAccountId != '') || isAllowedWithoutAccId) {
					$that.changePage(newView);
				}
				else {
					$that.changePage(new OptionsView());
				}
			}
			else {
				$that.changePage(new LoginView());
			}
		});
    }

});

$(document).ready(function () {
    console.log('document ready');
    app = new AppRouter();
    
    Backbone.history.start();
});