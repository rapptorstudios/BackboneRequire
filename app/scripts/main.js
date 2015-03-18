'use strict';

require.config({
	baseUrl: '.',

	paths: {
		jquery: 		'bower_components/jquery/dist/jquery',
		underscore: 'bower_components/underscore/underscore',		
		backbone: 	'bower_components/backbone/backbone',
		// foundation: 'bower_components/foundation',
		text: 			'bower_components/requirejs-text/text'
	},

	shim: {
		jquery: { exports: '$'},
		underscore: { exports: '_' },
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},		
		app: {
			deps: ['backbone'],
			exports: 'App'
		}
	}
});

require(
	// Load app modules and pass them to our definition function
	['jquery', 'underscore', 'backbone', 'app'],
	function ($, _, Backbone, App) {
		// The dependencies are passed in as "App"
		App.initialize();
	}
);