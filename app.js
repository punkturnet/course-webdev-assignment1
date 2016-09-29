(function() {
  'use strict';

  angular.module('LunchApp', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope)
  {
    $scope.message = "";
    $scope.dishes = "";
    $scope.statusClass = "";

    $scope.CheckDishes = function(){
      if($scope.dishes !== ""){
        
        var dishesCount = $scope.dishes.split(',').length;
        
        if(dishesCount <= 3)
        {
          $scope.message = "Enjoy!";
          $scope.statusClass = "alert-success";
        }
        else if(dishesCount > 3)
        {
          $scope.message = "Too much!"
          $scope.statusClass = "alert-warning";
        }
      }
      else 
      {
        $scope.message = "Please enter data firstt";
        $scope.statusClass = 'alert-danger';
      }
    };
  }
})();
