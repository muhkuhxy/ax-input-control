var require = {
   baseUrl: 'bower_components',
   deps: [],
   packages: [
      {
         name: 'moment',
         location: 'moment',
         main: 'moment'
      }
   ],
   paths: {
      angular: 'angular/angular',
      'angular-mocks': 'angular-mocks/angular-mocks',
      'angular-route': 'angular-route/angular-route',
      'angular-sanitize': 'angular-sanitize/angular-sanitize',
      bootstrap: 'bootstrap-sass-official/assets/javascripts/bootstrap',
      jjv: 'jjv/lib/jjv',
      jjve: 'jjve/jjve',
      json: 'requirejs-plugins/src/json',
      laxar: 'laxar/dist/laxar',
      'laxar-uikit': 'laxar-uikit/dist/laxar-uikit',
      'laxar/laxar_testing': 'laxar/dist/laxar_testing',
      requirejs: 'requirejs/require',
      text: 'requirejs-plugins/lib/text',

      // testing-specific paths:
      jasmine: 'jasmine/lib/jasmine-core/jasmine',
      q_mock: 'q_mock/q',
      jquery: 'jquery/dist/jquery'
   },
   shim: {
      angular: {
         deps: [ 'jquery' ],
         exports: 'angular'
      },
      'angular-mocks': {
         deps: [ 'angular' ],
         init: function ( angular ) {
            'use strict';
            return angular.mock;
         }
      },
      'angular-route': {
         deps: [ 'angular' ],
         init: function ( angular ) {
            'use strict';
            return angular.route;
         }
      },
      'angular-sanitize': {
         deps: [ 'angular' ],
         init: function ( angular ) {
            'use strict';
            return angular;
         }
      },
      'bootstrap/tooltip': {
         deps: [ 'jquery' ]
      }
   }
};
