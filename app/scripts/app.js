'use strict';

var myApp = angular.module('myApp', []);

myApp
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/myRoute', {
      templateUrl: 'views/myRoute.html',
      controller: 'myRouteCtrl'
    })
    // .when('/myRoute2', {
    //   templateUrl: 'views/myRoute.html',
    //   controller: 'MyrouteCtrl'
    // })
    // .when('/myRoute2', {
    //   templateUrl: 'views/myRoute.html',
    //   controller: 'MyrouteCtrl'
    // })
    // .when('/myRoute', {
    //   templateUrl: 'views/myRoute.html',
    //   controller: 'MyrouteCtrl'
    // })
    .otherwise({
      redirectTo: '/'
    });

})
.run(function($rootScope) { //@todo ERRORS
  $rootScope.$on('$viewContentLoaded', function () {
    $(document).foundation();
  });
})
;
