// Filename: app.js
define([
	'jquery',
	'underscore',
	'backbone',
	'router', // Request router.js
], function($, _, Backbone, Router){
	var initialize = function(){
		// Pass in our Router module and call it's initialize function
		Router.initialize();
	}

	return {
		initialize: initialize
	};
});

// define(['backbone', 'router'], function(Backbone, MainRouter) {
// 	router = new MainRouter();
// 	Backbone.history.start();
// });