'use strict';

myApp
  .controller('myRouteCtrl', function ($scope) {
    $scope.message = 'This is indicates a successful route...';

    $scope.images = [
      'http://lorempixel.com/400/200/sports/1',
      'http://lorempixel.com/400/200/sports/2',
      'http://lorempixel.com/400/200/sports/3',
      'http://lorempixel.com/400/200/sports/4'
    ];
  });

  // force height to stay.
