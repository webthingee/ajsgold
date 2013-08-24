'use strict';

myApp
  .controller('NavCtrl', function ($scope) {
    $scope.nav = {};
    $scope.nav.title = 'AngularJS Gold';

    // Off canvas menu vars
    var $page_class = $('.page-wrapper');
    var $menu_active_class = 'off-canvas-menu--active';
    var $menu_dormant_class = 'off-canvas-menu--dormant';
    $scope.row_move = 'dormant';

    // Off canbas initiate with dormant menu.
    $page_class.removeClass($menu_active_class).addClass($menu_dormant_class);

    // Off canvas click function to activate and de-activate menu.
    $scope.menuToggle = function(){
      if ($scope.row_move != 'active') {
        $scope.row_move = 'active';
        if ($('.toggle-topbar').is(":visible")) {
          $page_class.addClass($menu_active_class).removeClass($menu_dormant_class);
        }
      } else {
        $scope.row_move = 'dormant';
        if ($('.toggle-topbar').is(":visible")) {
          $page_class.removeClass($menu_active_class).addClass($menu_dormant_class);
        }
      }
    };

    // Selection Toggle
    $scope.selectionToggle = function(){
      if ($('.toggle-topbar').is(":visible")) {
        $page_class.removeClass($menu_active_class).addClass($menu_dormant_class);
      }
    };
  });
