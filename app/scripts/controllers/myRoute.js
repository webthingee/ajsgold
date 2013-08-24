'use strict';

myApp
  .controller('myRouteCtrl', function ($scope) {
    $scope.message = 'This is indicates a successful route...';

    $scope.myData = [
      {
        "image" : "http://lorempixel.com/1000/500/people/9",
        "caption" : "Lucas ipsum dolor sit amet darth biggs skywalker binks darth jade."
        },
      {
        "image" : "http://lorempixel.com/1000/500/people/3",
        "caption" : "Lucas ipsum dolor sit amet darth biggs skywalker binks darth jade."
        },
      {
        "image" : "http://lorempixel.com/1000/500/people/8",
        "caption" : "Lucas ipsum dolor sit amet darth biggs skywalker binks darth jade."
        },
      {
        "image" : "http://lorempixel.com/1000/500/people/7",
        "caption" : "Lucas ipsum dolor sit amet darth biggs skywalker binks darth jade."
        },
      {
        "image" : "http://lorempixel.com/1000/500/people/6",
        "caption" : "Lucas ipsum dolor sit amet darth biggs skywalker binks darth jade."
        },
      {
        "image" : "http://lorempixel.com/1000/500/people/5",
        "caption" : "Ben binks skywalker kamino moff obi-wan yavin jade."
        }
    ];

    $scope.images2 = [
      'http://lorempixel.com/800/800/food/1',
      'http://lorempixel.com/700/600/food/2',
      'http://lorempixel.com/500/700/food/3',
      'http://lorempixel.com/400/800/food/4'
    ];
  });
