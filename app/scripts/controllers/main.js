'use strict';

myApp
  .controller('MainCtrl', function ($scope) {
    $scope.images = [
      'http://lorempixel.com/400/200/city/1',
      'http://lorempixel.com/400/200/city/2',
      'http://lorempixel.com/400/200/city/3',
      'http://lorempixel.com/400/200/city/4'
    ];

    $scope.awesomeThings = [
      'AngularJS',
      'Foundation',
      'Sass'
    ];
  });
