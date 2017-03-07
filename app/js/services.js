angular.module('Ambulnz.services', []).
  service('pizzasService', [
    '$http', function($http) {
    this.getPizzas = function() {
      return $http.get('server/pizzas.json')
    }
  }])
  .service('orderService', ['$http', function($http){
    this.items = [];

    this.addItem = function(item) {
      this.items.push(item);
    }
  }])
