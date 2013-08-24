'use strict';

angular.module('myApp')
  .directive('directives', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the directives directive');
      }
    };
  })
  .directive('flexSliderLoader', ['$timeout', function (timer) {
    return {
      link: function (scope, elem, attrs, ctrl) {
        var flex = function () {
          $('.flexslider').flexslider({
            animation: "slide"
          });
        }
          timer(flex, 0);
        }
    }
  }]);
