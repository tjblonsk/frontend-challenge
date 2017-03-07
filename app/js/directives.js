/**
* Ambulnz.services Module
*
* Description
*/
angular.module('Ambulnz.directives', []).
  directive('amzPizza', [function() {
    // Runs during compile
    return {
      controller: function($scope, $element, $attrs, $transclude, orderService) {
        $scope.addItem = function(item) {
          console.log('here')
          orderService.addItem(item)
        }
      },
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    };
  }]);