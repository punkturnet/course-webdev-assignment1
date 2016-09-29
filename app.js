(function () {
'use strict';

angular.module('LunchApp', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
  $scope.message = "";
  $scope.dishes = "";
  $scope.statusClass = "";
  $scope.inputClass = "";
  $scope.dishesCount = 0;

  $scope.CheckDishes = function(){
    $scope.dishesCount = 0;
    if($scope.dishes !== ""){
      var dishes = $scope.dishes.split(',');

      for (var i = 0; i < dishes.length; i++) {
        if(dishes[i] && dishes[i].length > 0){
          $scope.dishesCount++;
        }
      };

      if($scope.dishesCount <= 3)
      {
        $scope.message = "Enjoy!";
        SetStatus('success');
      }
      else if($scope.dishesCount > 3)
      {
        $scope.message = "Too much!"
        SetStatus('warning');
      }
    }
    else 
    {
      $scope.message = "Please enter data first";
      SetStatus('danger');
    }
  };

  function SetStatus(status){
      $scope.statusClass = "alert-" + status;
      $scope.inputClass = "has-" + ((status === 'success' || status === 'warning') ? 'success' : 'error');
  }
}

})();
