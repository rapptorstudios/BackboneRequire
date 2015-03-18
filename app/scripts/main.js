'use strict';

require.config({
	baseUrl: '.',

  paths: {
    jquery: 		'bower_components/jquery/dist/jquery',
    backbone: 	'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    // foundation: 'bower_components/foundation',
		text: 			'bower_components/requirejs-text/text'
  },

 	shim: {
    underscore: { exports: '_' },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  App.initialize();
});