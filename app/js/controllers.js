angular.module('Ambulnz.controllers', []).
  controller('PizzasController', [
    '$scope', 'pizzasService', function($scope, pizzasService) {

      pizzasService.getPizzas().success(function(data) {
        $scope.pizzas = data
      })
  }])
  .controller('OrdersController', ['$scope', 'orderService', function($scope, orderService){
    $scope.order = orderService.items
  }])
