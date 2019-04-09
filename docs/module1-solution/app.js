(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
  $scope.meals = "";
  $scope.message = "";
  $scope.styleText = "";
  $scope.styleBorder = "";

  var showMessage = "";
  var numberOfMeals = 0;
  var styleText = "";
  var styleBorder = "";

  $scope.checkLunch = function (){
    numberOfMeals = countNumberOfMeals($scope.meals);
    if (numberOfMeals == 0) {
      showMessage = "Please enter data first";
      styleText = "color: red;";
      styleBorder = "border-color: red;";
    }
    else if (numberOfMeals > 0 && numberOfMeals <= 3){
      showMessage = "Enjoy";
      styleText = "color: green;";
      styleBorder = "border-color: green;";
    }
    else {
      showMessage = "Too much";
      styleText = "color: green;";
      styleBorder = "border-color: green;";
    }
    $scope.message = showMessage;
    $scope.styleText = styleText;
    $scope.styleBorder = styleBorder;
  }

  function countNumberOfMeals(string){
    var foods = string.split(',');
    var numberOfFoods = 0;
    // check for spaces to exclude them in the count
    foods.forEach(function(food){
      if (food.trim().length > 0){
        console.log(food)
        numberOfFoods += 1;
      }
    })
    return numberOfFoods;
  }
}
})();
