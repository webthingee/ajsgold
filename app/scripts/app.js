'use strict';

var myApp = angular.module('myApp', []);

myApp
.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix = '!';

  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/myRoute', {
      templateUrl: 'views/myRoute.html',
      controller: 'myRouteCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
})
.run(function($rootScope) { //@todo ERRORS
  $rootScope.$on('$viewContentLoaded', function () {
    setTimeout(function(){
      $(document).foundation();
  },
      999);
  });
})
;
